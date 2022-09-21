//EXPRESS
const Container = require ("./index")

const express = require('express')

const app = express()


//RUTAS

app.get('/', (req, res) => {
    res.send('<h1 style="color:grey;"> Desafio servidor express </h1>')
})

app.get('/productos', (req, res) => {
    let container = new Container()
    let products = container.getAll()
    res.send(`Productos disponibles: ${products}`)
})

/* app.get('/productoRandom', (req, res) => {
    res.send(`Producto al azar: ${contObj}`)
}) */


//PUERTO

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Server running in port ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`)) 
