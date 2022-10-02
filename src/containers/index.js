class Container{ 
    constructor(){
        this.productos = productos
    }

    save(productos){
        let id = this.productos.length + 1;
        producto.id = 1 //cambiar para cada uno nuevo
        this.productos.push(productos)
    }

    getAll(){
        return this.productos
    }

    getById(id){
        //retorna producto con id
        let productos = this.getAll()
        let result = productos.find(obj => obj.id === id)
        return result
    }

}

let productos = []


module.exports = Container