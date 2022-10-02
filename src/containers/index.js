class Container{ 
    constructor(){
        this.productos = []
    }

    save(producto){
        let id = this.productos.length + 1;
        producto.id = 1 //cambiar para cada uno nuevo
        this.productos.push(producto)
    }

    getAll(){
        return this.productos
    }

    getById(id){
        //retorna producto con id
    }

}

module.exports = Container