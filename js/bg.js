const button = document.createElement("button");
const body = document.body;
button.classList.add("bg_button");
button.textContent = "Фон 1";

const buttonBack = document.createElement("button");
buttonBack.classList.add("bg_button");
buttonBack.textContent = "Фон 2";
document.body.append(button);
document.body.append(buttonBack);

function setFirstBackground() {
  body.style.backgroundImage = "url(../img/page_bg.jpg)";
}

function setSecondBackground() {
  body.style.backgroundImage = "url(../img/page_bg.avif)";
}

button.addEventListener("click", setFirstBackground);
buttonBack.addEventListener("click", setSecondBackground);
