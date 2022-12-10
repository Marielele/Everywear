import React from 'react'
import { Link } from 'react-router-dom'

function StoreCard({ tienda }) {

    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);

    return (
        <div>
            <div className="col">
                <div className="card text-bg-dark border-0">
                    <img src={tienda.imgUrl} className="card-img" alt="..." />
                    <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                        <h5 className='card-title'>{tienda.nombre}</h5>
                        {activeUser != null && tienda.idU === activeUser.id ?
                            <Link className="stretched-link" to={`/myshop/${tienda.idTienda}`} /> :
                            <Link className="stretched-link" to={`/shop/${tienda.idTienda}`} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreCard