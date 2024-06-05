const path = require("path")
const port = 3000;
const express = require("express");
const app = express();


app.get('./*', (req, res) => {
  res.status(404).sendFile(path.resolve("./404.html"))
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./index.html"))
})

app.get("/about", (req, res) => {
  res.sendFile(path.resolve("./about.html"))
})

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve("./contact.html"))
})




app.listen(port, function () {
  console.log("Le serveur est lancé");
});
