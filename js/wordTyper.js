window.addEventListener('load', init);

//Global vars
let time = 5;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#input');
const currentWord = document.querySelector('#word');
const scoreDisplay = document.querySelector('#point');
const timeDisplay = document.querySelector('#time');
const messages = document.querySelector('#message');
const seconds = document.querySelector('#second');

const words =
    ['scare',
    'pot',
    'talented',
    'noiseless',
    'alert',
    'sort',
    'whip',
    'attack',
    'laugh',
    'spotty',
    'abaft',
    'wacky',
    'understood',
    'flap',
    'elective',
    'curl',
    'dream',
    'enter',
    'earsplitting',
    'rate',
    'invite',
    'taste',
    'ontain',
    'worry',
    'calm',
    'angry',
    'selection',
    'found',
    'pies',
    'spiders',
    'offer',
    'compete',
    'increase',
    'wash',
    'ine',
    'anxious',
    'changeable',
    'book',
    'daffy',
    'play',
    'follow',
    'nod',
    'sweater',
    'guitar',
    'precious',
    'attempt',
    'chance',
    'railway',
    'last',
    'draconian'];

function init(){
    //load word from array
    showWord(words);
    //Match input from user
    wordInput.addEventListener('input', startMatch);
    //countdown
    setInterval(countDown, 1000);
    //check the game status
    setInterval(checkGame, 50);
}

function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = 5;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    scoreDisplay.innerHTML = score;
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        messages.innerHTML = 'Keep it up!!!';
        return true;
    }else{
        messages.innerHTML = '';
        return false;
    }
}
function showWord(words){
    const index = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[index];
}

function countDown(){
    if(time > 0){
        time--;
    }else if(time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkGame(){
    if(!isPlaying && time === 0){
        messages.innerHTML = 'Game Over!!!';
        score = 0;
    }
}

