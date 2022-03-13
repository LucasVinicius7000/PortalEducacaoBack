const VerificaCamposVazios = (dados) => {
    let reco = []

    dados.forEach((valor, index, array) => {
        if (!valor.dado || valor.dado === undefined || valor.dado === null) {
            reco.push(`Campo ${valor.chave} vazio, favor preencher`)
        }
    })
    return reco;
}
const VerificarTamanho = (dados) => {
    let reco = []

    dados.forEach((valor, index, array) => {
        var maximo = valor.max
        if (valor.max === undefined) maximo = 30
        if (valor.dado.length < valor.min || valor.dado.length > maximo) {
            reco.push(`Campo ${valor.chave} possui a quantidade de caracteres errada`)
        }
    })
    return reco;


}

module.exports = {
    async CadastroEscola(req, res, next) {
        const {
            nome,
            endereco,
            telefone,
            ensinotrabalhado
        } = req.body;
        var CamposVaziosResultado = VerificaCamposVazios([
            {
                dado: nome,
                chave: 'nome'
            },
            {
                dado: endereco,
                chave: 'endereco'
            },
            {
                dado: telefone,
                chave: 'telefone'
            },
            {
                dado: ensinotrabalhado,
                chave: 'ensino trabalhado'
            },
        ])
        var VerificaTamanhoResultado = VerificarTamanho([
            {
                dado: nome,
                max: 30,
                min: 3,
                chave: 'nome'
            },
            {
                dado: telefone,
                max: 11,
                min: 11,
                chave: 'telefone'
            },
            {
                dado: endereco,
                max: 60,
                min: 10,
                chave: 'endereco'
            },
            {
                dado: ensinotrabalhado,
                max: 20,
                min: 10,
                chave: 'ensino trabalhado'
            },
        ])
        if (CamposVaziosResultado.length > 0) {
            return res.send({
                msg: "Erro com os dados",
                error: CamposVaziosResultado
            });
        } else if (VerificaTamanhoResultado.length > 0) {
            return res.send({
                msg: "Erro com os dados",
                error: VerificaTamanhoResultado
            })
        }
        else {
            return next();
        }
    },

    async CadastroProf(req, res, next) {
        const {
            nome,
            telefone,
            endereco,
            formacao,
            especializacao,
            disciplinaatrabalhar
        } = req.body;
        var CamposVaziosResultado = VerificaCamposVazios([
            {
                dado: nome,
                chave: 'nome'
            },
            {
                dado: endereco,
                chave: 'endereco'
            },
            {
                dado: telefone,
                chave: 'telefone'
            },
            {
                dado: formacao,
                chave: 'formacao'
            },
            {
                dado: especializacao,
                chave: 'especializacao'
            },
            {
                dado: disciplinaatrabalhar,
                chave: 'disciplinaatrabalhar'
            },
        ])
        var VerificaTamanhoResultado = VerificarTamanho([
            {
                dado: nome,
                max: 30,
                min: 3,
                chave: 'nome'
            },
            {
                dado: telefone,
                max: 11,
                min: 11,
                chave: 'telefone'
            },
            {
                dado: endereco,
                max: 60,
                min: 10,
                chave: 'endereco'
            },
            {
                dado: formacao,
                max: 50,
                min: 10,
                chave: 'formacao'
            },
            {
                dado: especializacao,
                max: 30,
                min: 10,
                chave: 'especialização'
            },
            {
                dado: disciplinaatrabalhar,
                max: 20,
                min: 4,
                chave: 'disciplina a trabalhar'
            }
        ])
        if (CamposVaziosResultado.length > 0) {
            return res.send({
                msg: "Erro com os dados",
                error: CamposVaziosResultado
            })
        } else if (VerificaTamanhoResultado.length > 0) {
            return res.send({
                msg: "Erro com os dados",
                error: VerificaTamanhoResultado
            })
        }
        else {
            return next();
        }
    },
    async CadastroAluno(req, res, next) {
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
        var CamposVaziosResultado = VerificaCamposVazios([
            {
                dado: nomedoaluno,
                chave: 'nome do aluno'
            },
            {
                dado: endereco,
                chave: 'endereco'
            },
            {
                dado: telefone,
                chave: 'telefone'
            },
            {
                dado: turma,
                chave: 'turma'
            },
            {
                dado: nomedoresponsavel,
                chave: 'nome do responsavel'
            },
            {
                dado: cpfresponsavel,
                chave: 'cpf do resposavel'
            },
        ])
        var VerificaTamanhoResultado = VerificarTamanho([
            {
                dado: nomedoaluno,
                max: 30,
                min: 3,
                chave: 'nomedoaluno'
            },
            {
                dado: telefone,
                max: 11,
                min: 11,
                chave: 'telefone'
            },
            {
                dado: endereco,
                max: 60,
                min: 10,
                chave: 'endereco'
            },
            {
                dado: email,
                max: 20,
                min: 10,
                chave: 'email'
            },
            {
                dado: datadenascimento,
                max: 20,
                min: 10,
                chave: 'datadenascimento'
            },
            {
                dado: turma,
                max: 20,
                min: 3,
                chave: 'turma'
            },
            {
                dado: nomedoresponsavel,
                max: 20,
                min: 3,
                chave: 'nomedoresponsavel'
            },
            {
                dado: cpfresponsavel,
                max: 20,
                min: 10,
                chave: 'cpfresponsavel'
            }
        ])
        if (CamposVaziosResultado.length > 0) {
            return res.send({
                msg: "Erro com os dados",
                error: CamposVaziosResultado
            })
        } else if (VerificaTamanhoResultado.length > 0) {
            return res.send({
                msg: "Erro com os dados",
                error: VerificaTamanhoResultado
            })
        }
        else {
            return next();
        }
    }
};
