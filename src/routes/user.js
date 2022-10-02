const { Router } = require('express')
const routerUser = Router()
const { middleware1, middleware2 } = require('../middlewares')
const Container = require('../containers')
const { getAll } = require('../controllers/user')


const contenedor = new Container()

//si quiero que el middleware afecte a todos los llamados: 
//routerUser.use(middleware2)

routerUser.get('/', getAll)

routerUser.post('/', middleware1, middleware2, (req,res) => {           //ejecuto ambos middleware para este llamado unicamente
    res.json({msg: 'Post User'})
})

routerUser.put('/', (req, rest) => {
    res.json({msg: 'Put ok'})
})

module.exports = routerUser;





