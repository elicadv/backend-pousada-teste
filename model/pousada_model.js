import dao from '../DAO/pousadaDAO.js'


const pousadaModel = {
    
    pegaTodosPousada : async ()=>{
    return await dao.pegaTodosPousada()
    },
}

export default pousadaModel