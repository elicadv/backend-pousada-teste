import express from 'express'
import pousadaController from './controller/pousada_controller.js'


const app = express()
const port = 3009

app.use(express.json())

pousadaController(app)

app.listen (port, () => {
    console.log(`http://localhost:${port}/`)
})

export default app