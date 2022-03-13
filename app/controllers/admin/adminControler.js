module.exports = {
    async Administrador(req, res) {//função auto explicativa 
        await auth.createUser({
            uid: '',
            email: '',
            password: '',
            emailVerified: false
        })
            .then(async (auth) => {
                const user = await userscolec.add({
                    email: '',
                    authid: auth.uid,
                    address: '',
                    name: ''
                });
                await admincolec.add({
                    userid: user.id,
                    phone: '',
                    scholl: ''
                });
                return res.send({
                    msg: 'criado com sucesso',
                });
            }).catch((err) => {
                return res.send({
                    msg: err
                });
            });

    }

}