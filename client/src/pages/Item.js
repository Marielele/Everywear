import React, { useState, useEffect } from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import uniqid from 'uniqid'

export default function Item() {

    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);

    const params = useParams()

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [descripcion, setDescripcion] = useState('')

    useEffect(() => {
        axios.post('/api/item/getdataitem', { idProducto: params.idProducto }).then(res => {
            const dataitem = res.data
            setNombre(dataitem.nombre)
            setPrecio(dataitem.precio)
            setDescripcion(dataitem.descripcion)
        })
    }, [params.idProducto])

    function addToCart() {
        var item = {
            idObjCarrito: 'CART' + uniqid(),
            idU: activeUser.id,
            nombre: nombre,
            precio: precio
        }
        axios.post('/api/cart/addToCart', item).then(res => {
            alert(res.data)
        }).then(err => { console.log(err) })

    }

    function addToWishlist() {
        var item = {
            nombre: nombre,
            precio: precio,
            idU: activeUser.id,
            idWish: 'WISH' + uniqid()
        }
        axios.post('/api/wishlist/addtowishlist', item).then(res => {
            alert(res.data)
        }).then(err => { console.log(err) })
    }

    return (
        <div>
            <NavBar />
            <div>
                <div className='container mt-4 mb-4'>
                    <div className='row row-cols-1 row-cols-md-2 g-4'>
                        <div className='col'>
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://www.dhresource.com/0x0/f2/albu/g19/M01/24/2D/rBNaN2EWJS2AWWtUAAI5eNkzAEY952.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://www.dhresource.com/0x0/f2/albu/g19/M01/24/2D/rBNaN2EWJS2AWWtUAAI5eNkzAEY952.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://www.dhresource.com/0x0/f2/albu/g19/M01/24/2D/rBNaN2EWJS2AWWtUAAI5eNkzAEY952.jpg" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className='col'>
                            <h3>{nombre}</h3>
                            <hr></hr>
                            <h1 className='display-5'>${precio}</h1>
                            <h5>Tallas</h5>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option value="1">XS</option>
                                <option value="2">S</option>
                                <option value="3">M</option>
                                <option value="4">L</option>
                                <option value="5">XL</option>
                            </select>
                            <h5>Descripción</h5>
                            <p>
                                {descripcion}
                            </p>
                            <div className="row">
                                <button onClick={addToCart} className="btn bg-secondcolor btn-lg col me-2" type="button">
                                    Agregar al carrito
                                </button>
                                <button onClick={addToWishlist} className="btn btn-dark btn-lg col ms-2" type="button">
                                    Añadir a wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
