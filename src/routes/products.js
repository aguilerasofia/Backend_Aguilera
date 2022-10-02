const { Router } = require('express')
const routerProducts = Router()
const { middleware3 } = require('../middlewares')



routerProducts.get('/', (req,res) => {
    res.json({msg: 'Get products'})
    res.json(body)
})

routerProducts.post('/', middleware3, (req,res) => {
    res.json({msg: 'Post products'})
})

module.exports = routerProducts


