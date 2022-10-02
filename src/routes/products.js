const { Router } = require('express')
const routerProducts = Router()


routerProducts.get('/', (req,res) => {
    res.json({msg: 'Get products'})
})

routerProducts.post('/', (req,res) => {
    res.json({msg: 'Post products'})
})

module.exports = routerProducts


