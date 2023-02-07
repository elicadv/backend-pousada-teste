import pousadaModel from "../model/pousada_model.js"

const pousadaController = (app)=>{

app.get('/pousada', async (req, res)=>{
   
try{
    const pousada = await pousadaModel.pegaTodosPousada()
    res.json({"Pousada":pousada,
          "erro":false
    }
    )
}catch(error){
    res.json(
        {"msg":error.message,
        "erro":true}
    )
}
})
app.get('/pousada/nome/:nome', async (req, res)=>{

    const nome = req.params.nome
    
    try{
    
    const pousada = await pousadaModel.pegaPousadaCliente(nome)
    
    
    res.json({"Pousada" : pousada,
                  "erro" : false}
            )
    }catch(error) {
        res.json({
            "msg":error.message,
            "erro":true
        })
    }
    })
}
export default pousadaController