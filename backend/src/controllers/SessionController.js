// metodos: index, show, update, store, destroy

/*
index: listagem de sessões
store: quando queremos criar uma sessão
show: quando queremos listar uma UNICA sessao
update: quando queremos atualizar alguma sessao
destroy: quando queremos deletar uma sessao
*/

import User from '../models/User'
class SessionController{
    async store(req, res) {
        const { email } = req.body;

        // Verificando se o usuário já existe
        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
}

export default new SessionController();