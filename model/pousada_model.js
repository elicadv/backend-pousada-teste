import dao from '../DAO/pousadaDAO.js'


const pousadaModel = {
    
    pegaTodosPousada : async ()=>{
    return await dao.pegaTodosPousada()
    },

    pegaPousadaCliente : async (nome)=>{
        const pousadaAtual = await dao.pegaPousadaCliente(nome)
        console.log(pousadaAtual)
        if(pousadaAtual){
            const pousadaCliente = {
                "cliente" : pousadaAtual.nome
            }
            return await dao.pegaPousadaCliente(nome,pousadaCliente)
        } else{
            throw new Error("Cliente não encontrado")
        }
        
    },

}

export default pousadaModel