import React from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Search() {
    return (
        <div>
            <NavBar />
            <div>
                <div className='container mt-4 mb-5'>
                    <h3>Resultados de busqueda</h3>
                    <hr className='mt-0' />
                    <h5>Articulos</h5>
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        <div className='col'>
                            <div className="card text-center">
                                <img src="https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Nombre Articulo</h5>
                                    <hr className='mt-0 mb-2' />
                                    <p className="card-text">$$$Precio</p>
                                    <Link className="stretched-link" to={`/ariticulo`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 className='mt-3'>Tiendas</h5>
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        <div className="col">
                            <div className="card text-bg-dark border-0">
                                <img src="https://www.fundaciocaixaltea.com/wp-content/uploads/2018/01/default-profile.png" className="card-img" alt="..." />
                                <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-bg-dark border-0">
                                <img src="https://www.fundaciocaixaltea.com/wp-content/uploads/2018/01/default-profile.png" className="card-img" alt="..." />
                                <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-bg-dark border-0">
                                <img src="https://www.fundaciocaixaltea.com/wp-content/uploads/2018/01/default-profile.png" className="card-img" alt="..." />
                                <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
