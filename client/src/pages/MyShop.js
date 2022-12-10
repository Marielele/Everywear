import React, { useState, useEffect } from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import prueba from '../imgs/no-image.png'
import axios from 'axios';
import ItemCard from '../components/ItemCard';

export default function MyShop() {

    const params = useParams()

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const [showEdit, seteditShow] = useState(false);
    const editClose = () => seteditShow(false);
    const editShow = () => seteditShow(true);

    const [showEmpleado, setEmpleadoShow] = useState(false);
    const empleadoClose = () => setEmpleadoShow(false);
    const empleadoShow = () => setEmpleadoShow(true);

    const [dataItems, setDataItems] = useState([])

    useEffect(() => {
        axios.post('/api/shop/getstoredata', { idTienda: params.idTienda }).then(res => {
            console.log(res.data)
            const dataTienda = res.data
            setNombre(dataTienda.nombre)
            setDescripcion(dataTienda.descripcion)
        })
        axios.post('/api/item/getstoreitems', { idTienda: params.idTienda }).then(res =>{
            setDataItems(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [params.idTienda])

    const listaItems = dataItems.map(producto => {
        return(
            <div>
                <ItemCard producto={producto} />
            </div>
        )
    })

    return (
        <div>
            <NavBar />
            <div>
                <Modal show={showEdit} onHide={editClose}>
                    <Modal.Header>
                        <Modal.Title>Editar tienda</Modal.Title>
                        <Button className='btn btn-outline-danger btn-white btn-red-hover' onClick={editClose}><i className="fas fa-times fa-lg fa-fw"></i></Button>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="formPerfil" name="formPerfil">
                            <div className="row">
                                <div id="Imagenes" className="col-5 align-items-center">
                                    <img src={prueba} className="rounded mx-auto d-block" alt="Foto de Perfil" id="FotoRegistro" />
                                    <input type="file" name="txtImagen" id="txtImagen" className="inputUploadFile" accept="image/*" />
                                    <label htmlFor="txtImagen" id="btnUploadfile" className="btn btn-outline-success my-2">Cargar Imagen</label>
                                    <label htmlFor="" className="btn btn-outline-danger my-2">Eliminar</label>
                                    <br />
                                </div>
                                <div className="col-7">
                                    <div className="form-group">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="Nombre de la tienda" maxLength="50" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <textarea id="txtDescripcion" name="txtDescripcion" placeholder="Descripcion" className="form-control" rows="5" required maxLength="250"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tile-footer">
                                <p align="right"><button id="btnActionForm" onClick={editClose} className="btn btn-outline-success" type="button">Guardar</button></p>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
                <Modal show={showEmpleado} onHide={empleadoClose}>
                    <Modal.Header>
                        <Modal.Title>Agregar empleado</Modal.Title>
                        <Button className='btn btn-outline-danger btn-white btn-red-hover' onClick={empleadoClose}><i className="fas fa-times fa-lg fa-fw"></i></Button>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="formEmpleado" name="formEmpleado">
                            <div className="form-group">
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="Nombre del usuario" maxLength="50" />
                                </div>
                            </div>

                            <div className="tile-footer">
                                <p align="right"><button id="btnActionForm" onClick={empleadoClose} className="btn btn-outline-success" type="button">Guardar</button></p>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
                <div className="container mt-4 mb-5">
                    <div className="row row-flex align-items-center my-2" >
                        <div className="col-sm-12 col-md-3">
                            <img src="https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png" className="card-img-top  mx-auto rounded align-center" alt="..." />
                        </div>
                        <div className="Perfil bg-thirdcolor h-25 col-sm-12 col-md-9 mt-sm-2 txt-white ">
                            <div className="row" >
                                <div className="col-sm-12 col-lg-6">
                                    <h3 id="NombreCompleto"> {nombre} </h3>
                                    <div className="d-flex flex-wrap">
                                        <p id="Correo"> {descripcion} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-flex align-items-center" >
                        <div className=" col-sm-12 col-md-3 p-1">
                            <Link to={`/additem/${params.idTienda}`} className="btn btn-outline-thirdcolor my-2 my-sm-0 w-100" type="button">
                                Publicar articulo
                            </Link>
                        </div>
                        <div className=" col-sm-12 col-md-3 p-1">
                            <button className="btn btn-outline-thirdcolor my-2 my-sm-0 w-100" type="button" onClick={empleadoShow}>
                                Agregar Empleado
                            </button>
                        </div>
                        <div className=" col-sm-12 col-md-3 p-1">
                            <Link to={`/statistics/${params.idTienda}`} className="btn btn-outline-thirdcolor my-2 my-sm-0 w-100" type="button">
                                Estadisticas
                            </Link>
                        </div>
                        <div className=" col-sm-12 col-md-3 p-1">
                            <button className="btn btn-outline-thirdcolor my-2 my-sm-0 w-100" type="button" onClick={editShow}>
                                Editar Tienda
                            </button>
                        </div>
                    </div>
                    <br />
                    <hr className='mt-0 w-100' />
                    <h3 className='txt-textcolor'>Productos</h3>
                    <div className="row row-cols-1 row-cols-md-5 g-4 txt-textcolor">
                        {listaItems}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
