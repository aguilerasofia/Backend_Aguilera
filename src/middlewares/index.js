const middleware1 = (req, res, next) => {
    console.log(req.headers)

    let { authorization } = req.headers;
    if(authorization == "admin"){
        console.log("permissions ok")
        next()
    }else{
        res.send("You do not have permissions")
    }
}

const middleware2 = (req, res, next) => {
    if(req.body.direccion){
        console.log("tiene body")
    }else{
        res.status(400).send ({ error: "No tiene direccion"})
    }

    next()
}

const middleware3 = (req, res, next) => {
    if(req.body.id){
        res.send.body
        console.log("tiene id")
    }else{
        res.status(404).send ({error: "producto no encontrado"})
    }

    next()
}


module.exports = { middleware1, middleware2, middleware3 }