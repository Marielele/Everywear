import React from 'react';
import logo from '../imgs/ProvisIcon.png';
import userIcon from '../imgs/userProvis.png';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    function endSession() {
        sessionStorage.clear();
    }

    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);
    return (
        activeUser != null ? <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-maincolor">
                <div className="container-fluid">
                    <div id='logazo' className='text-light' >
                        <Link className="dropdown-item" to={`/`}>
                            <img src={logo} alt='Everywear' width={35} />
                            Everywear
                        </Link>
                    </div>
                    <div id='buscadora' >
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 col-lg-8" type="search" aria-label="Search" />
                            <Link className="btn btn-outline-light border border-2 border-light fw-bold txt-maincolor-hover" to={'/search'}>
                                Buscar
                            </Link>
                        </form>
                    </div>
                    <div className="dropdown-center">
                        <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={userIcon} alt="user pic" width={35} />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <Link className="dropdown-item">
                                    {activeUser.username}
                                </Link>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <Link className="dropdown-item" to={`/profile`}>
                                    Mi Perfil
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to={`/stores`}>
                                    Tiendas
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to={`/wishlist`}>
                                    Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to={`/cart`}>
                                    Carrito
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to={`/addshop`}>
                                    Registrar Tienda
                                </Link>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <Link className="dropdown-item" to={`/myshops`}>
                                    Mis Tiendas
                                </Link>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <Link className="dropdown-item" onClick={endSession} to={`/login`}>
                                    Cerrar Sesion
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div> : <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-maincolor">
                <div className="container-fluid">
                    <div id='logazo' className='text-light' >
                        <Link className="dropdown-item" to={`/`}>
                            <img src={logo} alt='Everywear' width={35} />
                            Everywear
                        </Link>
                    </div>
                    <div id='buscadora' >
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 col-lg-8" type="search" aria-label="Search" />
                            <Link className="btn btn-outline-light border border-2 border-light fw-bold txt-maincolor-hover" to={'/search'}>
                                Buscar
                            </Link>
                        </form>
                    </div>
                    <div className="dropdown-center">
                        <button className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={userIcon} alt='Everywear' width={35} />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <Link className="dropdown-item" to={`/login`}>
                                    Inicia Sesion
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to={`/signin`}>
                                    Registrate
                                </Link>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <Link className="dropdown-item" to={`/stores`}>
                                    Tiendas
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
