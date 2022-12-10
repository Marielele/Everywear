import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function WishlistCard({ wishes }) {
    
    const navegar = useNavigate()

    function deletewish(idWish) {
        axios.post('/api/wishlist/deletewish', { idWish: idWish }).then(res => {
            console.log(res.data)
            alert(res.data)
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <div className='col'>
                <div className="card text-center">
                    <Link to={`/articulo`}>
                        <img src="https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png" className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{wishes.nombre}</h5>
                        <hr className='mt-0 mb-2' />
                        <p className="card-text">${wishes.precio}</p>
                        <button onClick={() => { deletewish(wishes.idWish) }} type="button" className="btn bg-thirdcolor">
                            Borrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistCard
