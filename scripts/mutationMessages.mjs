// Mutation Messages Data
export const MutationMessages = {
    mental: [
        "Minds twist and fracture as chaos whispers into the thoughts of its latest victim.",
        "A revelation too dark for mortal comprehension grips the mind, distorting reality.",
        "The corruption of Chaos seeps in, altering the very essence of thought.",
        "Shadows creep upon the edges of consciousness, sanity teeters on the abyss.",
        "A surge of alien knowledge floods the mind—wisdom or the first steps to madness?"
    ],
    physical: [
        "Flesh warps and shifts, bone and sinew reshaping under the influence of Chaos.",
        "A sickening crunch echoes as a grotesque mutation takes root.",
        "The body betrays itself, surrendering to corruption as new forms emerge.",
        "Chaos reshapes its chosen, leaving behind something no longer entirely human.",
        "Skin ripples and warps, chaos manifesting in the flesh of the afflicted."
    ],
    trivial: [
        "Though unsettling, the mutation is small—a whisper of Chaos rather than a scream.",
        "A minor taint, an omen of things to come.",
        "Barely noticeable, yet undeniable proof that corruption has begun.",
        "A harmless quirk to some, a dreadful omen to others.",
        "The first steps into darkness are always the easiest to ignore."
    ],
    minor: [
        "The stain of Chaos deepens—this is no longer something that can be hidden.",
        "The road to damnation is well-trodden now.",
        "Not lost, but never the same—corruption festers within.",
        "A sign of things to come, as Chaos takes a stronger hold.",
        "A step closer to monstrosity, a step away from humanity."
    ],
    major: [
        "The transformation is grotesque—there is no turning back.",
        "A monstrosity emerges, Chaos claiming yet another soul.",
        "No longer fully human, the victim has become a walking horror.",
        "There is no redemption—only the madness of mutation remains.",
        "Chaos does not simply touch anymore, it owns the afflicted completely."
    ],
    chosen: [
        "The will of Chaos is absolute. ${actor.name} is no longer mortal, but a vessel of the Dark Gods, reborn in their image.",
        "Mutation is no longer a curse, but a divine gift. ${actor.name} ascends beyond mere flesh, becoming a true horror of the Warp.",
        "Where once stood ${actor.name}, there is now only Chaos. Their body is remade, their soul irrevocably lost to the abyss.",
        "Laughter, screams, or whispers—it matters not. ${actor.name} has been chosen, their form a testament to the raw power of the Ruinous Powers.",
        "Few mortals are graced with such favor. Fewer still survive the transformation. ${actor.name} stands as a twisted avatar of Chaos, forever changed."
    ]
};


// Register the script when Foundry initializes
Hooks.once("init", () => {
    console.log("Mutation Messages Loaded");
    game.wfrp4eMutationMessages = MutationMessages;
});
