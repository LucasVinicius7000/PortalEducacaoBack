const express = require("express");
const { route } = require("./default");
const routes = express.Router()
const UserControler = require("./../controllers/admin/UserControler");
const MiddValidator = require ("./../middleware/MiddValidator")

routes.post("/professores", MiddValidator.CadastroProf, UserControler.CadastroProf );
routes.post("/alunos", MiddValidator.CadastroAluno, UserControler.CadastroAluno );
routes.post("/escola", MiddValidator.CadastroEscola, UserControler.CadastroEscola );



module.exports = routes