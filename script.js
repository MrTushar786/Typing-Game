let btn = document.getElementById('btn');
const first = document.getElementById('first');
const input = document.getElementById('input');
const div = document.getElementById('.text');
const stage = document.getElementById('stage');
const reset = document.getElementById('reset');

let plh = input.getAttribute("placeholder");
first.innerHTML="The quick brown fox jumps over the lazy dog in lowercase without commas. Embrace the simplicity, focusing on foundational accuracy and speed. Each keystroke propels you forward, setting the stage for the challenges that lie ahead in the TypoTrainer journey.";
// buttons
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');

// levels
let level1  = `The quick brown fox jumps over the lazy dog in lowercase without commas. Embrace the simplicity, focusing on foundational accuracy and speed. Each keystroke propels you forward, setting the stage for the challenges that lie ahead in the TypoTrainer journey.`;
let level2 = `Now, navigate sentences with multiple syllables and varied structures. Dive into nuanced grammar and punctuation, enhancing your typing prowess. The complexity advances, demanding a refined touch. Each key press becomes a step towards mastery, bridging the gap between simplicity and intricacy.`;
let level3= `Encounter heightened complexity with rich vocabulary and intricate syntax. Navigate elaborate passages with precision, closely observing punctuation nuances. The challenge is formidable, but your fingers dance across the keys with practiced skill. TypoTrainer becomes a symphony of words, a crescendo of typing mastery achieved through diligence and focus.`;
let level4 = `Ascend to the pinnacle of TypoTrainer mastery. Confront sentences that weave together profound concepts, demanding a synergy of speed and accuracy. Traverse the labyrinth of advanced vocabulary and intricate syntax. Your fingertips, now virtuosos, dance across the keyboard, turning each keystroke into a masterpiece of typing finesse.`;

one.addEventListener('click', () => {
    stage.innerHTML = "LEVEL-1";
    first.innerHTML=level1;
    input.placeholder = "Start typing here";
});
two.addEventListener('click', () => {
    stage.innerHTML = "LEVEL-2";
    first.innerHTML=level2;
    input.placeholder = "Start typing here";
});

three.addEventListener('click', () => {
    stage.innerHTML = "LEVEL-3";
    first.innerHTML=level3;
    input.placeholder = "Start typing here";
}); 

four.addEventListener('click', () => {
    stage.innerHTML = "LEVEL-4";
    first.innerHTML=level4;
    input.placeholder = "Start typing here";
}); 

btn.addEventListener('click', () => {
    if (input.value == level1) {
        btn.innerHTML = "Correct";
        btn.style.background = 'linear-gradient(0deg, rgba(26,241,87,1) 0%, rgba(66,170,28,1) 100%)';
    } else if (input.value == level2) {
        btn.innerHTML = "Correct";
        btn.style.background = 'linear-gradient(0deg, rgba(26,241,87,1) 0%, rgba(66,170,28,1) 100%)';
    } else if (input.value == level3) {
        btn.innerHTML = "Correct";
        btn.style.background = 'linear-gradient(0deg, rgba(26,241,87,1) 0%, rgba(66,170,28,1) 100%)';
    } else if (input.value == level4) {
        btn.innerHTML = "Correct";
        btn.style.background = 'linear-gradient(0deg, rgba(26,241,87,1) 0%, rgba(66,170,28,1) 100%)';
    } else {
        btn.innerHTML = "Better Luck Next time";
        btn.style.background = 'linear-gradient(0deg, rgba(194,30,30,1) 0%, rgba(213,19,19,1) 100%)';
    }
});

reset.addEventListener('click',()=>{
    input.value=""
    btn.innerHTML="Submit"
    btn.style.background='linear-gradient(163deg, rgba(17, 197, 214, 1) 0%, rgba(14, 165, 218, 1) 100%)';
}); 
