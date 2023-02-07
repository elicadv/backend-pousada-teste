import pousadaModel from "../model/pousada_model.js"

const pousadaController = (app)=>{

app.get('/pousada', async (req, res)=>{
   
try{
    const pousada = await pousadaModel.pegaTodosPousada()
    res.json({"Pousada" : pousada,
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
}
export default pousadaController