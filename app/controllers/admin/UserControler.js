module.exports = {
    CadastroProf(req, res) {
        const {
            nome,
            telefone,
            endereco,
            formacao,
            especializacao,
            disciplinaatrabalhar
        } = req.body;
        console.log(nome, telefone, endereco, formacao, especializacao, disciplinaatrabalhar)
        return res.send({
            msg: "Professor Criado",
            professor: {
                nome: nome,
                telefone: telefone,
                endereco: endereco,
                formacao: formacao,
                especializacao: especializacao,
                disciplinaatrabalhar: disciplinaatrabalhar
            }
        });
    },

    CadastroAluno(req, res) {
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
        console.log(nomedoaluno, telefone, endereco, email, turma, datadenascimento,nomedoresponsavel, cpfresponsavel)
        return res.send({
            msg: "Aluno Criado",
            aluno: {
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
    }
}