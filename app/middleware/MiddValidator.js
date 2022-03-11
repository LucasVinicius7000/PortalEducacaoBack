const VerificaCamposVazios = (dados) => {
    let reco = []

    dados.forEach((valor, index, array)=>{
        if (!valor.dado || valor.dado === undefined || valor.dado === null){
            reco.push( `Campo ${valor.chave} vazio, favor preencher`)
        }
    })
    return reco;
}
const VerificarTamanho = (dados) =>{
    let reco = []

    dados.forEach((valor, index, array)=>{
        var maximo = valor.max
        if(valor.max === undefined) maximo = 30
        if (valor.dado.length < valor.min || valor.dado.length > maximo){
            reco.push( `Campo ${valor.chave} possui a quantidade de caracteres errada`)
        }
    })
    return reco;

    
}

module.exports = {
    async CadastroEscola (req,res,next){
        const {
            nome,
            endereco,
            telefone,         
            ensinotrabalhado
        } = req.body;
        var CamposVaziosResultado = VerificaCamposVazios([
            {
                dado:nome,
                chave: 'nome'
            },
            {
                dado:endereco,
                chave: 'endereco'
            },
            {
                dado:telefone,
                chave: 'telefone'
            },
            {
                dado: ensinotrabalhado,
                chave: 'ensino trabalhado'
            },
        ]) 
        var VerificaTamanhoResultado = VerificarTamanho([
            {
                dado:nome,
                max: 30,
                min: 3, 
                chave:'nome' 
            },
            {
                dado:telefone,
                max: 11,
                min: 11,
                chave:'telefone'
            },
            {
                dado:endereco,
                max: 60,
                min: 10,
                chave:'endereco'
            },
            {
                dado:ensinotrabalhado,
                max: 20,
                min: 10,
                chave:'ensino trabalhado'
            },
        ])
        if(CamposVaziosResultado.length > 0){
            return res.send({ 
                msg:"Erro com os dados",
                error:CamposVaziosResultado 
            })
        }else if(VerificaTamanhoResultado.length > 0){
            return res.send({
                msg:"Erro com os dados",
                error:VerificaTamanhoResultado
            })
        }
        else{
            return next();
        }
    },
};
