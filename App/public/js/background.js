let background = document.querySelector("#app-home");

const tempoDelay = 2500; //Tempo de Delay para alternar o background

document.addEventListener("load", changeBackground());

function changeBackground() {
  setInterval(() => {
    background.classList.toggle("black");
  }, tempoDelay);
}
