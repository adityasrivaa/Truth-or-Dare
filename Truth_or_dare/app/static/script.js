let truthBtn = document.querySelector('.truth-btn');
let dareBtn = document.querySelector('.dare-btn');
let displaycontainer = document.querySelector('.display-container');


//questions array

let truth = [
    "What's the last lie you told?",
    "What was the most embarrassing thing you've ever done on a date?",
    "Have you ever accidentally hit something (or someone!) with your car?",
    "Name someone you've pretended to like but actually couldn't stand.",
    "What's your most bizarre nickname?",
    "What's been your most physically painful experience?",
    "What bridges are you glad that you burned?",
    "What's the craziest thing you've done on public transportation?",
    "If you met a genie, what would your three wishes be?",
    "If you could write anyone on Earth in for President of the United States, who would it be and why?",
    "What's the meanest thing you've ever said to someone else?",
    "Who was your worst kiss ever?",
    "What's one thing you'd do if you knew there were no consequences?",
    "What's the craziest thing you've done in front of a mirror?",
    "What's the meanest thing you've ever said about someone else?",
    "What's something you love to do with your friends that you'd never do in front of your partner?",
    "Who are you most jealous of?",
    "What do your favorite pajamas look like?",
    "Have you ever faked sick to get out of a party?",
    "Who's the oldest person you've dated?",
    "How many selfies do you take a day?",
    "Meatloaf says he'd do anything for love, but he won't do 'that.' What's your 'that?'",
    "How many times a week do you wear the same pants?",
    "Would you date your high school crush today?",
    "Where are you ticklish?",
];


let dare = [
    "Let another player post a status on your social.",
    "Do freestyle rap for 1 minute about the other participants.",
    "Smell every other player's armpits.",
    "Kiss the person to your left.",
    "Do an impression of another player until someone can figure out who it is.",
    "Call your crush.",
    "Dance with no music for 1 minute.",
    "Do a cartwheel.",
    "Let the person on your right draw on your face.",
    "Give your phone to another player who can send one text saying anything they want to one of your contacts.",
    "Drink lemon juice.",
    "Crack an egg on your head.",
    "Swap clothes with someone of the opposite sex for 2 rounds.",
    "Act like a chicken until your next turn.",
    "Burp the alphabet.",
    "Talk in a Jamaican accent until your next turn.",
    "Call a friend, pretend it's their birthday, and sing 'Happy Birthday' to them.",
    "Perform ballet for 1 minute.",
    "Shower with your clothes on.",
    "Take a selfie on the toilet and post it.",
    "End each sentence with the word 'not' until your next turn.",
    "Name a famous person that looks like each player.",
    "Dance like your life depends on it.",
    "Eat a packet of hot sauce or ketchup straight.",
    "Pour ice down your pants.",
];

truthBtn.addEventListener('click', () => {
    let trueValue = truth[Math.floor(Math.random() * truth.length)];
    displaycontainer.innerHTML = `<p class='text'> ${trueValue}</p>`;
})

dareBtn.addEventListener('click', () => {
    let dareValue = dare[Math.floor(Math.random() * dare.length)];
    displaycontainer.innerHTML = `<p class='text'> ${dareValue}</p>`;
})