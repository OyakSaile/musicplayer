const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const port = 3000;
// PÁGINA PRINCIPAL
app.get("/", (req, res) => {
  res.render("index");
});
// PLAYER DE MÚSICA
app.get("/player", (req, res) => {
  res.render("player");
});

app.listen(port, () => {
  console.log(`Aplicativo está rodando na porta http://localhost:${port} ❤`);
});
