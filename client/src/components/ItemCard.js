import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard({producto}) {
    return (
        <div>
            <div className='col'>
                <div className="card text-center">
                    <img src="https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <hr className='mt-0 mb-2' />
                        <p className="card-text">${producto.precio}</p>
                        <Link to={`/item/${producto.idProducto}`} className="stretched-link"></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemCard