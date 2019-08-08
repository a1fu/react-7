import React from 'react'

import Menu from './menu/menu'
import Slide from './slide/slide'
import Productos from './productos/productos'

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            productos: [],
        }
    }

    componentWillMount(){
        this.agregarProductoState(this.state.productos, this.obtenerProductosLocalStorage())
    }

    // state

    // insertar this.state
    agregarProductoState = (arr, item) => {
        this.setState({
            productos: arr.concat(item)
        })
    }

    // actualizar this.state
    actualizarProductosState = (item) => {
        this.setState({
            productos: item
        })
        return true
    } 

    // local

    // obtener productos local storage
    obtenerProductosLocalStorage(){
        let productoLS
        if(localStorage.getItem('productos') === null){
            productoLS = []
        }else{
            productoLS = JSON.parse(localStorage.getItem('productos'))
        }
        return productoLS
    }

    //funciones
    
    // agregar producto a Carrito
    agregarCarrito = (e) => {
        let item = e.target.parentElement.parentElement
        this.leerDatosProducto(item)
    }

    // leer datos del producto
    leerDatosProducto = (item) => {
        let infoProducto = {
            id: item.querySelector('.btn').getAttribute('data-id'),
            img: item.querySelector('.card-img-top').src,
            title: item.querySelector('.card-title').innerText,
            precio: item.querySelector('.precio').innerText
        }
        if(this.insertarProducto(infoProducto)){
            this.insertarProductoLocalStorage(infoProducto)
        }
    }

    // insertar producto a carrito
    insertarProducto = (infoProducto) => {
        if(!this.productoRepetido(infoProducto)){
            this.agregarProductoState(this.state.productos, infoProducto)
            return true
        }
    }

    // verificar si se repite el producto
    productoRepetido(i){
        return this.state.productos.find( e => e.id === i.id )
    }

    // insertar producto a local storage
    insertarProductoLocalStorage(infoProducto){
        let producto
        producto = this.obtenerProductosLocalStorage()
        producto.push(infoProducto)
        localStorage.setItem('productos', JSON.stringify(producto))
    }

    //

    // eliminar producto de carrito y local storage
    eliminarProducto = (e) => {
        let newProductos, id
        id = e.target.getAttribute('data-id')
        newProductos = this.state.productos.filter( e => e.id !== id)
        if(this.actualizarProductosState(newProductos)){
            this.actualizarProductosLocalStorage(newProductos) 
        }
    }

    // actualizar productos local storage
    actualizarProductosLocalStorage(newProductos){
        localStorage.setItem('productos', JSON.stringify(newProductos))
    }

    // vaciar carrito
    lipiarCarrito = () => {
        // forma lenta
        this.setState({
            productos: [],
        })

        this.limpiarCarritoLocalStorage()
    }

    // lipiar local storage
    limpiarCarritoLocalStorage(){
        localStorage.clear()
    }

    render () {
        return (
            <React.Fragment>
                <Menu productos={this.state.productos} eliminarProducto={this.eliminarProducto} lipiarCarrito={this.lipiarCarrito}/>
                <Slide />
                <Productos agregarCarrito={this.agregarCarrito}/>
            </React.Fragment>
        )
    }
}

export default Home