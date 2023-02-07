import db from "../database/db-sqlite.js"


const dao = {

    pegaTodosPousada: () => {
        
        const PEGA_POUSADA = `SELECT * FROM POUSADA`
        return new Promise((resolve, reject) => {
        
            db.all(PEGA_POUSADA, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },
    pegaPousadaCliente: (nome) => {
        const PEGA_POUSADA = `
        SELECT * FROM POUSADA
        WHERE nome = ?
        `
        return new Promise((resolve, reject) => {
            db.get(PEGA_POUSADA, nome, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    }
}



export default dao