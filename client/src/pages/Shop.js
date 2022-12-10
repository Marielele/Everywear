import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Shop() {

    const params = useParams()

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')

    useEffect(() => {
        axios.post('/api/shop/getstoredata', { idTienda: params.idTienda }).then(res => {
            console.log(res.data)
            const datausuario = res.data
            setNombre(datausuario.nombre)
            setDescripcion(datausuario.descripcion)
        })
    }, [params.idTienda])

    return (
        <div>
            <NavBar />
            <div className="container mt-4 mb-5">
                <div className="row row-flex align-items-center" >
                    <div className="col-3">
                        <img src="https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png" className="card-img-top  mx-auto rounded align-center" alt="..." />
                    </div>
                    <div className="Perfil bg-thirdcolor h-25 align-items-center col-9 txt-white">
                        <div className="row align-items-center" >
                            <div className="col-sm-10">
                                <h3 id="NombreCompleto">{nombre}</h3>
                                <div className="d-flex flex-wrap">
                                    <p id="descripcion">{descripcion}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <br />
                <hr className='mt-0 w-100' />
                <h3 className='txt-textcolor'>Productos</h3>
                <div className="row row-cols-1 row-cols-md-5 g-4 txt-textcolor">
                    <div className='col'>
                        <div className="card text-center">
                            <img src="https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Nombre Articulo</h5>
                                <hr className='mt-0 mb-2' />
                                <p className="card-text">$$$Precio</p>
                                <Link className="stretched-link" to={`/articulo`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


