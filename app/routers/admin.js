const express = require("express");
const { route } = require("./default");
const routes = express.Router()
const UserControler = require("./../controllers/admin/UserControler");

routes.post("/professores", UserControler.CadastroProf );
routes.post("/alunos", UserControler.CadastroAluno );

module.exports = routes