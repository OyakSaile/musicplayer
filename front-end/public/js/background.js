let background = document.querySelector("#app-home");
const tempoDelay = 1000;

document.addEventListener("load", changeBackground());

function changeBackground() {
  setTimeout(() => {
    background.classList.add("black");
  }, tempoDelay);
}
