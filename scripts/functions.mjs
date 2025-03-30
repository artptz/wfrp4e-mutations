import { MutationMessages } from "./mutation-messages.mjs"; // Import the messages module

export async function rollMutation(actor, mutationSource) {
    if (!MutationMessages) {
        ui.notifications.error("Mutation Messages not found. Ensure the world script is loaded.");
        return;
    }

    const messages = game.wfrp4eMutationMessages;
        
        // If one of the Chaos Gods is selected, use special messages and skip type/severity rolls
        if (["khorne", "tzeentch", "slaanesh", "nurgle"].includes(mutationSource)) {
            const godMessage = messages[mutationSource][Math.floor(Math.random() * messages[mutationSource].length)];

            ChatMessage.create({
                content: `<b>${mutationSource.toUpperCase()}:</b> ${godMessage}`,
                speaker: { alias: "Dissolution of Body and Mind" }
            });
        
            // Proceed directly to rolling the mutation table for the god
            const tables = game.tables.contents;
            const filteredTables = tables.filter(t => t.flags?.wfrp4e?.key === "mutation" && t.flags?.wfrp4e?.column === mutationSource);
        
            if (filteredTables.length === 0) {
                ui.notifications.warn("No matching mutation tables found.");
            } else if (filteredTables.length > 1) {
                ui.notifications.error("Multiple mutation tables found. Please refine your filter.");
            } else {
                const table = filteredTables[0];
                fromUuid(table.uuid).then(async fetchedTable => {
                    if (fetchedTable) {
                        const draw = await fetchedTable.draw();
                    } else {
                        ui.notifications.error(`Could not fetch table with UUID: ${table.uuid}`);
                    }
                });
            }
            return;
        }
        
        // Standard mutation roll process for "all" and "necromancy"
        const speciesValue = actor.system?.details?.species?.value?.toLowerCase() || "unknown";
        const speciesList = {
            "dwarf": /dwarf/i,
            "elf": /elf/i,
            "halfling": /halfling/i,
            "human": /human/i,
            "gnome": /gnome/i,
            "ogre": /ogre/i
        };
        
        let species = "unknown";
        for (const [key, regex] of Object.entries(speciesList)) {
            if (regex.test(speciesValue)) {
                species = key;
                break;
            }
        }
        const mutations = actor.items.filter(item => item.type === "mutation").length;
        const mutationBonus = Math.min(mutations * 10, 40);
        
        // Roll for mutation type
        const typeRoll = await new Roll("1d100").roll();
        await typeRoll.toMessage({ flavor: "Mutation Type Roll" });

        let mutationType;
        const typeRollValue = typeRoll.total;
        
        switch (species) {
            case "dwarf":
                mutationType = typeRollValue <= 5 ? "physical" : "mental";
                break;
            case "elf":
            case "halfling":
                mutationType = "mental";
                break;
            case "human":
            case "gnome":
                mutationType = typeRollValue <= 50 ? "physical" : "mental";
                break;
            case "ogre":
                mutationType = typeRollValue <= 10 ? "physical" : "mental";
                break;
            default:
                mutationType = typeRollValue <= 50 ? "physical" : "mental";
        }
        
    // Send mutation type message
    const mutationMessage = mutationType === "mental"
        ? messages.mental[Math.floor(Math.random() * messages.mental.length)]
        : messages.physical[Math.floor(Math.random() * messages.physical.length)];

    ChatMessage.create({ content: `<b>${mutationType.toUpperCase()}:</b> ${mutationMessage}`, speaker: { alias: "Mutation Type" }});
        // Short delay so players can see the roll
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const severityRoll = await new Roll(`1d100+${mutationBonus}`).roll();
        await severityRoll.toMessage({ flavor: "Mutation Severity Roll" });
        
        const severityRollValue = severityRoll.total;
        let severity;
        if (severityRollValue <= 60) severity = "trivial";
        else if (severityRollValue <= 100) severity = "minor";
        else if (severityRollValue <= 130) severity = "major";
        else {
            severity = "chosen";
            const chosenMessage = messages.chosen[Math.floor(Math.random() * messages.chosen.length)];
        
            ChatMessage.create({
                content: `<b>${severity.toUpperCase()}:</b> ${chosenMessage}`,
                speaker: { alias: "Mutation Severity" }
            });
            return;
        }
        
        
    // Send severity message
    let severityMessage;
    if (severity === "trivial") {
        severityMessage = messages.trivial[Math.floor(Math.random() * messages.trivial.length)];
    } else if (severity === "minor") {
        severityMessage = messages.minor[Math.floor(Math.random() * messages.minor.length)];
    } else if (severity === "major") {
        severityMessage = messages.major[Math.floor(Math.random() * messages.major.length)];
    }

    ChatMessage.create({ content: `<b>${severity.toUpperCase()}:</b> ${severityMessage}`, speaker: { alias: "Mutation Severity" }});
        // Short delay so players can see the roll
        await new Promise(resolve => setTimeout(resolve, 2000));

    const tables = game.tables.contents;
    const tableColumn = mutationSource === "necromancy" ? `${severity}-${mutationType}-necro` : `${severity}-${mutationType}`;

    const filteredTables = tables.filter(t =>
        t.flags?.wfrp4e?.key === "mutation" &&
        t.flags?.wfrp4e?.column === `${tableColumn}`
    );

    if (filteredTables.length === 0) {
        ui.notifications.warn("No matching mutation tables found.");
    } else if (filteredTables.length > 1) {
        ui.notifications.error("Multiple mutation tables found. Please refine your filter.");
    } else {
        const table = filteredTables[0];
        fromUuid(table.uuid).then(async fetchedTable => {
            if (fetchedTable) {
                const draw = await fetchedTable.draw();
            } else {
                ui.notifications.error(`Could not fetch table with UUID: ${table.uuid}`);
            }
        });
    }
}

// Register the function globally
Hooks.once("init", () => {
    console.log("Mutation Roll Function Loaded");
    game.wfrp4eMutationRoll = rollMutation;
});

