const containerEl = document.querySelector(".container");
const inputEl = document.querySelector("#speed");
const career = "We love programming";
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;

    containerEl.innerHTML = `<h1>${career.slice(0, characterIndex)}</h1>`;

    if (characterIndex === career.length) {
        characterIndex = 0; 
    }

    const speedMultiplier = parseInt(inputEl.value) || 1;

    const baseSpeed = 400; 

    const speed = baseSpeed / speedMultiplier;

    setTimeout(updateText, speed);
}
