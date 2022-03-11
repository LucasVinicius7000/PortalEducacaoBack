const express = require("express");
const { route } = require("./default");
const routes = express.Router()
const UserControler = require("./../controllers/admin/UserControler");
const MiddValidator = require ("./../middleware/MiddValidator")

routes.post("/professores", UserControler.CadastroProf );
routes.post("/alunos", UserControler.CadastroAluno );
routes.post("/escola", MiddValidator.CadastroEscola, UserControler.CadastroEscola );



module.exports = routes