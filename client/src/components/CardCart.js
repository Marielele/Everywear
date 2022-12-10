import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CardCart({ obj }) {

    const navegar = useNavigate()

    function deleteobj(idObjCarrito){
        axios.post('/api/cart/deleteobj', {idObjCarrito: idObjCarrito}).then(res => {
            alert(res.data)  
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <div className='card mb-3'>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img width={180} src="https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className='col-md-8'>
                        <div className="card-body">
                            <h5 className="card-title">{obj.nombre}</h5>
                            <hr className='mt-0' />
                            <p className="card-text"><h3>${obj.precio}</h3></p>
                            <button type="button" onClick={()=>{deleteobj(obj.idObjCarrito)}} className="btn bg-secondcolor position-absolute bottom-0 end-0 m-3">
                                Borrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCart