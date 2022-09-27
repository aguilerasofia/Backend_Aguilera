//EXPRESS
const Container = require ("./index")

const express = require('express')

const app = express()

let container = new Container('productos.txt')

const randomProduct = async () => {
    const random = await container.getAll()
    const randomParse = JSON.parse(random)
    const getRandom = randomParse[Math.floor(Math.random() * randomParse.length)]
    return getRandom
}


//RUTAS

app.get ('/', (req, res) => {
    res.send('<h1 style="color:grey;"> Desafio servidor express </h1>')
})

app.get('/productos', async (req, res) => {
    let products = await container.getAll()
    res.send(`Productos disponibles: ${products}`)
})

app.get('/productoRandom', async (req, res) => {
    let obtainRandom = await randomProduct()
    let result = JSON.stringify(obtainRandom)
    res.send(`Producto al azar: ${result}`)
})


//PUERTO

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Server running in port ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`)) 
