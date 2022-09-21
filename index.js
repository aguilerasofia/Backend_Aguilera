//LEER ARCHIVO DE PRODUCTOS

const fs = require('fs')

class Container{
    constructor(file){
        this.file = file
    }

    async getAll(){
        let content  = await fs.promises.readFile(this.file)
        let contObj = JSON.parse(content)   
        return contObj
    }

/*     async randomProduct(){
        let contObj = await this.getAll()
        let random = Math.floor(Math.random()*contObj.length);
        contObj.push(random)            
        await fs.promises.writeFile(this.file, JSON.stringify(contObj))
        return result
    } */

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






