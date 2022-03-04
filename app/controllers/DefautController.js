module.exports = {
    Administrador(req,res){
        console.log("Criando Adm");
        return res.send({
            msg:"Admin Criado com Sucesso!",
            admin:"Teste"
        });
    }
}