import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { LilFooter } from '../components/LilFooter';
import prueba from '../imgs/no-image.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function Profile() {

    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);

    const [showEdit, seteditShow] = useState(false);
    const editClose = () => seteditShow(false);
    const editShow = () => seteditShow(true);

    const [showPago, setPagoShow] = useState(false);
    const pagoClose = () => setPagoShow(false);
    const pagoShow = () => setPagoShow(true);

    const [showEnvio, setEnvioShow] = useState(false);
    const envioClose = () => setEnvioShow(false);
    const envioShow = () => setEnvioShow(true);

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contra, setContra] = useState('');

    function updateUser() {
        var upUser = {
            nombre: nombre,
            email: email,
            contra: contra,
            idU: activeUser.id
        }
        axios.post('api/user/updateuser', upUser).then(res => {
            alert('Usuario actualizado')
            var newActiveUser = {
                username: res.data.nombre,
                email: res.data.email,
                id: res.data.idU
            }
            sessionStorage.setItem('activeUser', JSON.stringify(newActiveUser))
            window.location.reload()
        }).then(err => { console.log(err) })
    }

    function addPaymethod(){
        
    }

    return (
        <div>
            <NavBar />
            <br />
            <div className='container'>
                <Modal show={showEdit} onHide={editClose}>
                    <Modal.Header>
                        <Modal.Title>Editar perfil</Modal.Title>
                        <Button className='btn btn-outline-danger btn-white btn-red-hover' onClick={editClose}>
                            <i className="fas fa-times fa-lg fa-fw"></i>
                        </Button>
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
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <input type="text" id="txtNombre" name="txtNombre" value={nombre} onChange={(e) => { setNombre(e.target.value) }} placeholder={ activeUser.username } className="form-control" maxLength="50" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <input type="email" id="txtCorreo" name="txtCorreo" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder={ activeUser.email } maxLength="50" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                            <input type="password" id="txtContraseña" name="txtContraseña" value={contra} onChange={(e) => { setContra(e.target.value) }} className="form-control" placeholder="Contraseña" maxLength="20" />
                                            <i className="fas fa-eye fa-lg me-3 fa-fw" id="mostrar" type="button"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label hidden id="ErrorContraseña">Errores en la contraseña:</label>
                            <div className="tile-footer">
                                <p align="right">
                                    <button id="btnActionForm" onClick={updateUser} className="btn btn-outline-success" type="button">
                                        Guardar
                                    </button>
                                </p>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
                <Modal show={showPago} onHide={pagoClose}>
                    <Modal.Header >
                        <Modal.Title>Agregar metodo de pago</Modal.Title>
                        <Button className='btn btn-outline-danger btn-white btn-red-hover' onClick={pagoClose}><i className="fas fa-times fa-lg fa-fw"></i></Button>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="formDireccion" name="formDireccion">
                            <div className="form-group">
                                <div className="d-flex flex-row align-items-center mb-2">
                                    <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="Tarjeta" maxLength="50" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="Fecha de vencimiento" maxLength="50" />
                                    </div>
                                </div>
                                <div className="form-group col">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="CVV" maxLength="4" />
                                    </div>
                                </div>
                            </div>
                            <div className="tile-footer">
                                <p align="right"><button id="btnActionForm" onClick={addPaymethod} className="btn btn-outline-success" type="button">Guardar</button></p>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

                <Modal show={showEnvio} onHide={envioClose}>
                    <Modal.Header>
                        <Modal.Title>Agregar direccion de envio</Modal.Title>
                        <Button className='btn btn-outline-danger btn-white btn-red-hover' onClick={envioClose}><i className="fas fa-times fa-lg fa-fw"></i></Button>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="formDireccion" name="formDireccion">
                            <div className="row">
                                <div className="form-group col">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="Calle" maxLength="50" />
                                    </div>
                                </div>
                                <div className="form-group col">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="Numero" maxLength="50" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="Colonia" maxLength="50" />
                                    </div>
                                </div>
                                <div className="form-group col">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="Codigo Postal" maxLength="10" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="d-flex flex-row align-items-center mb-2">
                                    <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="Municipio" maxLength="50" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="d-flex flex-row align-items-center mb-2">
                                    <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="Estado" maxLength="50" />
                                </div>
                            </div>
                            <div className="tile-footer">
                                <p align="right"><button id="btnActionForm" onClick={envioClose} className="btn btn-outline-success" type="button">Guardar</button></p>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

                <div className="Contenido" id="Contenido4">
                    <div className="Perfil bg-thirdcolor w-100 text-center">
                        <div className="row align-items-center" >
                            <div className="col-12 col-sm-3">
                                <img src={prueba} className="rounded mx-auto d-block" alt="Foto de Perfil" id="FotoRegistro" />
                            </div>
                            <div className="col-12 col-sm-7 txt-white">
                                <h3 className="mt-1" id="NombreCompleto"> {activeUser.username} </h3>
                                <div className="d-flex flex-wrap justify-content-center">
                                    <i className="fas fa-envelope fa-lg mt-3 me-2"></i> <p className="mt-1" id="Correo"> {activeUser.email} </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-2 ">
                                <button className="btn btn-outline-light my-2 my-sm-0 fw-bold border border-2 border-light txt-thirdcolor-hover" type="button" onClick={editShow}>
                                    Editar Perfil
                                </button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="Perfil bg-thirdcolor w-100 txt-white">
                        <div className='row mx-1 mb-2'>
                            <h4 className="text-left col-10" id="">Metodos de pago</h4>
                            <button className="btn btn-outline-light txt-right txt-thirdcolor-hover col-2 fw-bold border border-2 border-light" onClick={pagoShow}>
                                Agregar
                            </button>
                        </div>
                        <ul>
                            <li>
                                <div className='row mx-1 '>
                                    <div className="col-11">Tarjeta con terminacion 1234</div>
                                    <button className="btn btn-outline-light txt-right txt-rojo-hover col-1 fw-bold border border-2 border-light">
                                        <i className="fa-solid fa-x"></i>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <div className="Perfil bg-thirdcolor w-100 txt-white">
                        <div className='row mx-1 mb-2'>
                            <h4 className="text-left col-10" id=""> Direccion de envio </h4>
                            <button className="btn btn-outline-light txt-right txt-thirdcolor-hover col-2 fw-bold border border-2 border-light" onClick={envioShow}>
                                Agregar
                            </button>
                        </div>
                        <ul>
                            <li>
                                <div className='row mx-1'>
                                    <div className="col-11"> Calle #123, Colonia, Municipio, Estado</div>
                                    <button className="btn btn-outline-light txt-right txt-rojo-hover col-1 fw-bold border border-2 border-light">
                                        <i className="fa-solid fa-x"></i>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <div className="row">
                        <hr />
                    </div>
                </div>
                <br />
            </div>
            <LilFooter />
        </div>
    )
}
