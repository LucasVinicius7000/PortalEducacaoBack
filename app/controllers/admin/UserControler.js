const {escolacolec} = require("./../../firebase")
const {profcolec} = require("./../../firebase")
const {alunocolec} = require("./../../firebase")


module.exports = {
    async CadastroEscola(req,res){
        
        const {
            nome,
            endereco,
            telefone,         
            ensinotrabalhado
        } = req.body;

        const escola = await escolacolec.where('nome', '==', nome).get();
        
        if(escola.empty){
            await escolacolec.add(
                {
                    nome: nome,
                    telefone: telefone,
                    endereco: endereco,
                    ensinotrabalhado: ensinotrabalhado
                }
            ).then((escola)=>{
                return res.send({
                    msg:"deu certo!",
                    escola:{
                        id:escola._path.segments[1],
                        nome:nome,
                        telefone: telefone,
                        endereco: endereco,
                        ensinotrabalhado: ensinotrabalhado
                    }
                });
            }).catch((err)=>{
                return res.send({
                    msg:"Erro ao efetuar a criação da escola.",
                    error:err
                })
            });
        }else{
            return res.send({
                msg:"Erro ao efetuar a criação da escola.",
            })
        }
       
    },


    async CadastroProf(req, res) {
        const {
            nome,
            telefone,
            endereco,
            formacao,
            especializacao,
            disciplinaatrabalhar
        } = req.body;

        const professor = await profcolec.where('nome', '==', nome).get();
        
        if(professor.empty){
            await profcolec.add(
                {
                    nome: nome,
                    telefone: telefone,
                    endereco: endereco,
                    formacao: formacao,
                    especializacao: especializacao,
                    disciplinaatrabalhar: disciplinaatrabalhar
                }
            ).then((professor)=>{
                return res.send({
                    msg:"Finalizado!!",
                    prof:{
                        id:professor._path.segments[2],
                        nome: nome,
                        telefone: telefone,
                        endereco: endereco,
                        formacao: formacao,
                        especializacao: especializacao,
                        disciplinaatrabalhar: disciplinaatrabalhar
                    }
                });
            }).catch((err)=>{
                return res.send({
                    msg:"Erro ao efetuar o cadastro de um proffessor",
                    error:err
                })
            });
        }else{
            return res.send({
                msg:"Erro ao efetuar o cadastro de um proffessor",
            })
        }
    },


    async CadastroAluno(req, res) {
        const {
            nomedoaluno,
            telefone,
            endereco,
            email,
            datadenascimento,
            turma,
            nomedoresponsavel,
            cpfresponsavel

        } = req.body;

        const aluno = await alunocolec.where('nome', '==', nomedoaluno).get();
        
        if(aluno.empty){
            await alunocolec.add(
                {
                    nomedoaluno: nomedoaluno,
                    telefone: telefone,
                    endereco: endereco,
                    turma: turma,
                    email:email,
                    nomedoresponsavel: nomedoresponsavel,
                    cpfdoresponsavel: cpfresponsavel,
                    datadenascimento: datadenascimento
                }
            ).then((aluno)=>{
                return res.send({
                    msg:"Finalizado!!",
                    aluno:{
                        id:aluno._path.segments[3],
                        nomedoaluno: nomedoaluno,
                        telefone: telefone,
                        endereco: endereco,
                        turma: turma,
                        email:email,
                        nomedoresponsavel: nomedoresponsavel,
                        cpfdoresponsavel: cpfresponsavel,
                        datadenascimento: datadenascimento
                    }
                });
            }).catch((err)=>{
                return res.send({
                    msg:"Erro ao efetuar o cadastro de um aluno",
                    error:err
                })
            });
        }else{
            return res.send({
                msg:"Erro ao efetuar o cadastro de um aluno",
            })
        }
    },
       
}