const btn = document.querySelector("#back");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  window.history.back();
});
