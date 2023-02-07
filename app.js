import express from 'express'
import cors from "cors"
import pousadaController from './controller/pousada_controller.js'


const app = express()

app.use(cors())

const port = 3009

app.use(express.json())

pousadaController(app)

app.listen (process.env.PORT || 3009, () => {
    console.log(`http://localhost:${port}/`)
})

export default app