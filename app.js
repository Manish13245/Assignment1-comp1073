// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Initialize textToSpeak
var textToSpeak = '';

// Arrays for sentence parts
const nouns = ['cat', 'dog', 'car', 'bird', 'robot'];
const verbs = ['jumps', 'runs', 'flies', 'eats', 'sleeps'];
const adjectives = ['quick', 'lazy', 'happy', 'sad', 'angry'];
const secondNouns = ['ball', 'tree', 'mountain', 'book', 'shoe'];
const places = ['park', 'city', 'space', 'beach', 'forest'];

// Variables to hold selected words
let noun = '';
let verb = '';
let adjective = '';
let secondNoun = '';
let place = '';

// Function to get a random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Event listeners for buttons
document.getElementById('noun-btn').addEventListener('click', () => {
    noun = getRandomWord(nouns);
    updateStory();
});

document.getElementById('verb-btn').addEventListener('click', () => {
    verb = getRandomWord(verbs);
    updateStory();
});

document.getElementById('adj-btn').addEventListener('click', () => {
    adjective = getRandomWord(adjectives);
    updateStory();
});

document.getElementById('second-noun-btn').addEventListener('click', () => {
    secondNoun = getRandomWord(secondNouns);
    updateStory();
});

document.getElementById('place-btn').addEventListener('click', () => {
    place = getRandomWord(places);
    updateStory();
});

// Function to update the story on the page
function updateStory() {
    const story = `The ${adjective} ${noun} ${verb} the ${secondNoun} in the ${place}.`;
    document.getElementById('story-output').textContent = story;
}

// Text-to-Speech functionality
document.getElementById('speak-btn').addEventListener('click', () => {
    const story = document.getElementById('story-output').textContent;
    speakNow(story);
});

// Function to speak the story using Text-to-Speech API
function speakNow(textToSpeak) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);
} 


    
