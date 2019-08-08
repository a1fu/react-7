import React from 'react'

import './menu.scss'

class Menu extends React.Component {
    render(){
        return(
            <React.Fragment>
                <nav>
                    <div className="dropdown bttn">
                        <button className="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Carrito
                        </button>
                        <div className="dropdown-menu bxCarrito p-2" aria-labelledby="dropdownMenuButton">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Imagen</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { 
                                        this.props.productos
                                        .map( (req) => {
                                            return (
                                                <tr key={req.id}>
                                                    <td><img src={req.img} alt="" height="20"/></td>
                                                    <td>{req.title}</td>
                                                    <td>{req.precio}</td>
                                                    <td><button type="button" data-id={req.id} className="btn btn-sm btn-danger" onClick={this.props.eliminarProducto}>X</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className="dropdown-divider"></div>
                            <button type="button" className="btn btn-sm btn-outline-danger d-block" onClick={this.props.lipiarCarrito}>Vaciar carrito</button>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Menu
