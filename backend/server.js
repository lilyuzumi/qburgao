const { urlencoded } = require("body-parser");
const { request } = require("express");
const express = require("express");
const app = express();

app.use(express,urlencoded({extended:true}));

app.get("/", (req, res) => {request.json({
    message: "Bem vindo à API MVC do Senac"
})
});
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})
app.listen(3001, (req, res) => {
    console.log("Servidor rodando na porta 3001");
})
