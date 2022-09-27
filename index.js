//LEER ARCHIVO DE PRODUCTOS

const fs = require('fs')

class Container{
    constructor(file){
        this.file = file
    }

    async getAll(){
        let content  = await fs.promises.readFile(this.file)
        //let contObj = JSON.parse(content)   
        return content
    }

}

let products  = new Container('productos.txt')

const useContainer = async () => {
    await products.getAll() 
    return products
}

useContainer()


//EXPORT
module.exports = {useContainer}
module.exports = Container





