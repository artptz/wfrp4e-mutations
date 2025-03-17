// Mutation Messages Data
export const MutationMessages = {
    mental: [
        "Your mind twists and fractures as chaos whispers into your thoughts.",
        "A revelation too dark for mortal comprehension grips you, distorting your reality.",
        "The corruption of Chaos seeps in, altering the very essence of your mind.",
        "Shadows creep upon the edges of your consciousness, your sanity teeters on the abyss.",
        "A surge of alien knowledge floods your mind—wisdom or the first step to madness?"
    ],
    physical: [
        "Your flesh warps and shifts, bone and sinew reshaping under the influence of Chaos.",
        "A sickening crunch echoes through your body as a grotesque mutation takes root.",
        "Your body betrays you, surrendering to corruption as new forms emerge.",
        "Chaos reshapes its chosen, leaving you something no longer entirely human.",
        "Your skin ripples and warps, chaos manifesting in your very flesh."
    ],
    trivial: [
        "Though unsettling, your mutation is small—a whisper of Chaos rather than a scream.",
        "A minor taint, an omen of things to come.",
        "Barely noticeable, yet undeniable proof that corruption has begun.",
        "A harmless quirk to some, a dreadful omen to others.",
        "The first steps into darkness are always the easiest to ignore."
    ],
    minor: [
        "The stain of Chaos deepens—this is no longer something that can be hidden.",
        "The road to damnation is well-trodden now.",
        "Not lost, but never the same—corruption festers within you.",
        "A sign of things to come, as Chaos takes a stronger hold.",
        "A step closer to monstrosity, a step away from humanity."
    ],
    major: [
        "The transformation is grotesque—there is no turning back.",
        "A monstrosity emerges, Chaos claiming yet another soul.",
        "No longer fully human, you have become a walking horror.",
        "There is no redemption—only the madness of mutation remains.",
        "Chaos does not simply touch anymore, it owns you completely."
    ],
    chosen: [
        "The will of Chaos is absolute. You are no longer mortal, but a vessel of the Dark Gods, reborn in their image.",
        "Mutation is no longer a curse, but a divine gift. You ascend beyond mere flesh, becoming a true horror of the Warp.",
        "Where once stood a mortal, there is now only Chaos. Your body is remade, your soul irrevocably lost to the abyss.",
        "Laughter, screams, or whispers—it matters not. You have been chosen, your form a testament to the raw power of the Ruinous Powers.",
        "Few mortals are graced with such favor. Fewer still survive the transformation. You are a twisted avatar of Chaos, forever changed."
    ],
    khorne: [
        "The bloodlust cannot be denied. You feel a surge of violent rage overtaking your thoughts, your body strengthening with newfound fury.",
        "A maddening roar echoes in your mind, an insatiable hunger for slaughter growing deep within your soul.",
        "Your flesh hardens, veins pulse with unnatural energy. You are remade for battle, a living weapon of the Blood God.",
        "The scent of blood fuels your transformation. Your hands tremble, eager to bring carnage to the battlefield.",
        "There is no peace, no hesitation—only war. Khorne has claimed you, and the urge to destroy is all-consuming."
    ],
    tzeentch: [
        "The very fabric of reality twists before your eyes. Your body shifts and shimmers, flesh no longer bound by mortal constraints.",
        "A thousand whispers echo in your mind, each voice speaking truths too terrible to comprehend.",
        "Nothing is certain. Not past, not future, not even self. Your identity unravels, reshaped by the Architect of Fate.",
        "The change is... inevitable. Fingers stretch, bones shift, the sensation is both agonizing and exhilarating.",
        "Tzeentch’s will reshapes you, not as a curse, but as a divine evolution into something beyond comprehension."
    ],
    slaanesh: [
        "A rush of overwhelming sensation floods your body—pleasure, pain, ecstasy, all blending into one intoxicating experience.",
        "Your skin tingles, your nerves burn with newfound sensitivity. Your senses expand beyond mortal limits.",
        "Every sound, every touch, every taste is intensified a hundredfold. Your body shudders as you succumb to the whisper of the Dark Prince.",
        "Perfection must be attained, at any cost. You feel a hunger, a need, a desire that can never be fully satisfied.",
        "The change is as beautiful as it is horrifying. You are no longer bound by mortal limitations, but by an endless pursuit of excess."
    ],
    nurgle: [
        "A sickly warmth spreads through your body, the embrace of decay bringing with it an eerie sense of comfort.",
        "Flesh sloughs away, yet there is no pain. The Grandfather’s love is boundless, and you have been granted the gift of eternal endurance.",
        "The scent of rot is intoxicating, a reminder of the cycle of life. You smile, your body bloating with unnatural resilience.",
        "Sores and pustules erupt across your skin, yet you feel nothing but an overwhelming sense of belonging.",
        "Nurgle’s gifts are not a curse, but a blessing—an embrace of the inevitable. You laugh as your body festers, yet never weakens."
    ]
};

// Register the script when Foundry initializes
Hooks.once("init", () => {
    console.log("Mutation Messages Loaded");
    game.wfrp4eMutationMessages = MutationMessages;
});
