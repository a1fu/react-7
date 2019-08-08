import React from 'react'

import './productos.scss'

class Productos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imgs: [
                'https://picsum.photos/200/100?random=1',
                'https://picsum.photos/200/100?random=2',
                'https://picsum.photos/200/100?random=3',
                'https://picsum.photos/200/100?random=4',
            ]
        }
    }

    render() {
        return(
            <React.Fragment>
                <div className="contProdcutos">
                    <div className="productos">

                        {
                            this.state.imgs
                            .map( (req, index) => 
                                <div key={index} className="card">
                                    <img src={req} className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Producto {index+1}</h5>
                                        <p className="card-text">Caracteristica {index+1}</p>
                                        <p className="precio">${index+1}</p>
                                        <button type="button" data-id={index+1} className="btn btn-primary" onClick={this.props.agregarCarrito}>Comprar</button>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Productos