import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'
import prueba from "../imgs/no-image.png";
import { LilFooter } from '../components/LilFooter';
import uniqid from 'uniqid';
import axios from 'axios';

export default function Signin() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contra, setContra] = useState('');

    function addUser() {
        var usuario = {
            nombre: nombre,
            email: email,
            contra: contra,
            idU: uniqid()
        }
        console.log(usuario)
        axios.post('/api/user/createuser', usuario).then(res => {
            alert(res.data)
        }).then(err => {console.log(err)})
    }

    return (
        <div>
            <NavBar />
            <div className="Contenido container">
                <br />
                <div className="Signin bg-fourthcolor">
                    <form id="formRegistro" className="form-inline" name="formRegistro">
                        <br />
                        <div className="row mx-1">
                            <div id="Imagenes" className="col-4">
                                <img src={prueba} className="rounded mx-auto d-block" alt="Foto de Perfil" name="FotoRegistro" id="FotoRegistro" />
                                <input type="file" name="txtImagen" id="txtImagen" className="inputUploadFile" accept="image/*" />
                                <label htmlFor="txtImagen" id="btnUploadfile" className="btn btn-outline-light my-2 border border-light border-2 txt-fourthcolor-hover fw-bold">Cargar Imagen</label>
                                <label htmlFor="" className="btn btn-outline-light my-2 border border-light border-2 txt-rojo-hover fw-bold">Eliminar</label>
                            </div>
                            <div className="col-8 " >
                                <div className="d-flex flex-row align-items-center mb-3">
                                    <i className="fas fa-user fa-lg me-3 fa-fw txt-textcolor"></i>
                                    <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder='Nombre completo' value={nombre} onChange={(e) => { setNombre(e.target.value) }}>
                                    </input>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-3">
                                    <i className="fas fa-key fa-lg me-3 fa-fw txt-textcolor"></i>
                                    <input type="password" id="txtContraseña" name="txtContraseña" className="form-control" placeholder='Contraseña' value={contra} onChange={(e) => { setContra(e.target.value) }}>
                                    </input>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-3">
                                    <i className="fas fa-key fa-lg me-3 fa-fw txt-textcolor"></i>
                                    <input type="password" id="txtContraseña2" name="txtContraseña2" className="form-control" placeholder="Confirmar contraseña" />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-3">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw txt-textcolor"></i>
                                    <input type="email" id="txtCorreo" name="txtCorreo" className="form-control" placeholder="Correo" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <label hidden id="ErrorContraseña">Errores en la contraseña:</label>
                        <button className="btn btn-outline-light my-2 border border-light border-2 txt-fourthcolor-hover fw-bold" type="button" id="btnSignin" onClick={addUser}>
                            Registrarse
                        </button>
                        <br />
                        <label className="fw-bold txt-textcolor">Ya tienes cuenta? <Link to={`/login`} className='Link'>Inicia Sesion</Link></label>
                    </form>
                </div>
            </div>
            <LilFooter />
        </div>
    )
}
