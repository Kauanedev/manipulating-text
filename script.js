
const buttonS = document.querySelector(".subtitles");
const buttonI = document.querySelector(".italic");
const buttonB = document.querySelector(".bold");

const smallerFont = document.querySelector(".smaller-font");
const currentFontSize = document.querySelector(".current-font-size");
const biggerFont = document.querySelector(".bigger-font");


const redButton = document.querySelector(".red-btn")
const blueButton = document.querySelector(".blue-btn")
const purpleButton = document.querySelector(".purple-btn")
const greenButton = document.querySelector(".green-btn")


const text = document.querySelector("p");


buttonS.onclick = () => {
    text.style.textDecoration =
        text.style.textDecoration === "underline" ? "none" : "underline";

}

buttonI.onclick = () => {
    text.style.fontStyle =
        text.style.fontStyle === "italic" ? "normal" : "italic";

}

buttonB.onclick = () => {
    text.style.fontWeight =
        text.style.fontWeight === "bold" ? "normal" : "bold";

}




function getCurrentFontSize() {
    const currentFontSize = text.style.fontSize.split('px')[0];

    return parseInt(currentFontSize) || 16

}

smallerFont.onclick = () => {
    if (getCurrentFontSize() > 12) {
        text.style.fontSize = `${getCurrentFontSize() - 2}px`;

        currentFontSize.textContent = getCurrentFontSize();
    }
}

biggerFont.onclick = () => {

    text.style.fontSize = `${getCurrentFontSize() + 2}px`;

    currentFontSize.textContent = getCurrentFontSize();

}




redButton.onclick = () => {
    text.style.color =
        text.style.color === 'red' ? 'black' : 'red'

}

blueButton.onclick = () => {
    text.style.color =
        text.style.color === 'blue' ? 'black' : 'blue'

}

purpleButton.onclick = () => {
    text.style.color =
        text.style.color === 'blueviolet' ? 'black' : 'blueviolet'

}

greenButton.onclick = () => {
    text.style.color =
        text.style.color === 'green' ? 'black' : 'green'

}
