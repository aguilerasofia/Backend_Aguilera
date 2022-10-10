const { Router } = require('express')
const Container = require('../containers')
const routerProducts = Router()

const container = new Container()

routerProducts.get('/', (req, res, next) => {
    const productos = container.getAll()
    res.json({productos})
})

routerProducts.get('/:id', (req, res, next) => {
    const { id } = req.params
    const product = container.getById(id)
    if (!product){
        return res.json({
            msg: "The product does not exist",
            error: true
        })
    }
    res.json({ data: product })
    
})

routerProducts.post('/', (req, res, next) => {
    const { name, price, thumbnail } = req.body
    if (!name || !price || !thumbnail){
        return res.json({
            msg: "Missing properties to create a new product",
            error: true
        })
    }

    const product = { name, price, thumbnail }
    container.save(product)

    res.json({ data: product })
})

routerProducts.put('/:id', (req, res, next) => {
    const { id } = req.params
    const updatedProduct = req.body
    container.updateById(+id, updatedProduct)
    res.json ({data: updatedProduct})
})

routerProducts.delete('/:id', (req, res, next) => {
    const { id } = req.params
    let product = container.getById(id)
    if (!product){
        return res.json({
            msg: "This product does not exist",
            error: true
        })
    }
    container.deleteById(id)
    res.json({msg: "Product deleted succesfully"})
})



module.exports = routerProducts



