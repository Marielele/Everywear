import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'
import prueba from "../imgs/no-image.png";
import { LilFooter } from '../components/LilFooter';
import uniqid from 'uniqid';
import axios from 'axios';

const txtError = React.createRef();
const btnRegistro = React.createRef();
const txtNombre = React.createRef();
const txtCorreo = React.createRef();
const txtContra = React.createRef();
const txtContra2 = React.createRef();
const txtImagen = React.createRef();
const formRegistro = React.createRef();
const imageRef = React.createRef();
var ValidarContra1 = false;
var ValidarContra2 = false;

export default function Signin() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contra, setContra] = useState('');
    const [contra2, setContra2] = useState('');
    const [img, setImage] = useState('');

    
    function addUser(e) {
        e.preventDefault();
        txtNombre.current.disabled = true;
        txtCorreo.current.disabled = true;
        txtContra.current.disabled = true;
        txtContra2.current.disabled = true;
        var usuario = {
            nombre: nombre,
            email: email,
            contra: contra,
            imgurl: img,
            idU: uniqid()
        }
        console.log(usuario)

        if(nombre !== "" && email !== "" && contra !== "" && contra2 !== ""){
            axios.post('/api/user/searchemail', usuario).then(res => {
                if(res.data === 1){
                    validar_clave(contra, "")
                    repetir_clave(contra, contra2)
                    if(ValidarContra1 && ValidarContra2){
                        var formData = new FormData(formRegistro.current);
                        formData.append("idU", usuario.idU)
                        axios.post('/api/user/createuser', formData).then(res => {
                            alert(res.data)
                            window.location = "http://localhost:3000/login";
                        }).then(err => {console.log(err)})
                    }
                    else {
                        alert("Revisa tus contraseñas");
                    }
                }else{
                    alert(res.data);
                }
            }).then(err => {console.log(err)})
            
        } else {
            alert("Faltan datos");
        }
        txtNombre.current.disabled = false;
        txtCorreo.current.disabled = false;
        txtContra.current.disabled = false;
        txtContra2.current.disabled = false;
    }
    
    function onChangeIMG(){
        console.log(txtImagen.current.files);
        var files = txtImagen.current.files;
        var element;
        var supportedImages = ["image/jpeg", "image/png"];
        var limite_kb = 5000;
        var setEncontraronElementosNoValidos = false;
        for(var i = 0; i < files.length; i++){
            element = files[i];
            if (supportedImages.indexOf(element.type) !== -1 && element.size <= limite_kb * 1024){
                var imgCodified = URL.createObjectURL(element);
                console.log(imageRef);
                imageRef.current.setAttribute("src", imgCodified);
    
            }
            else {
                setEncontraronElementosNoValidos= true;
            }
        }
        if(files.length > 0){
            if(setEncontraronElementosNoValidos){
                alert("Formato o tamaño invalido");
            }
            else{
                setImage(txtImagen.current.files);
                alert("Archivo subido correctamente" );
            }
        }
    }

    function borrarImagen(){
        imageRef.current.setAttribute("src", prueba);
        txtImagen.current.value = "";
    }

    function validar_clave(clave, error){
        error="";
            if(clave.length < 8){
                ValidarContra1 = false;
                error = "La clave debe tener al menos 8 caracteres";
                return error;
            }
            if(/[a-z]/.test(clave) === false){
                ValidarContra1 = false;
                error = "La clave debe tener al menos una minuscula";
                return error;
            }
            if(/[A-Z]/.test(clave) === false){
                ValidarContra1 = false;
                error = "La clave debe tener al menos una mayuscula";
                return error;
            }
            if(/[0-9]/.test(clave) === false){
                ValidarContra1 = false;
                error = "La clave debe tener al menos un numero";
                return error;
            }
            if(/[^a-zA-Z\d]/.test(clave) === false){
                ValidarContra1 = false;
                error = "La clave debe tener al menos un caracter especial";
                return error;
            }
            if(error === ""){
                ValidarContra1 = true;
            }
            return error;
    }
    function repetir_clave(clave, clave2){
        if(clave === clave2){
            ValidarContra2 = true;
            return false;
        } else{
            ValidarContra2 = false;
            return true;
        }
    }
    
    function onChangeContra1(){
        var error_clave = "";
        error_clave = validar_clave(contra, error_clave);
        if (contra !== "") {
            if(error_clave !== ""){
                txtError.current.hidden = false;
                txtError.current.innerText = error_clave;
                ValidarContra1 = false;
            } else {
                txtError.current.hidden = true;
                ValidarContra1 = true;
            }
        }
        else {
            txtError.current.hidden = true;
            ValidarContra1 = false;
        }
    }
    function onChangeContra2(){
        var error_clave = "";
        error_clave = repetir_clave(contra, contra2);
        if(error_clave){
            txtError.current.hidden = false;
            txtError.current.innerHTML = 'Las contraseñas no coinciden'
            ValidarContra2 = false;
        } else {
            txtError.current.hidden = true;
            ValidarContra2 = true;
        }
        if (contra2 === "") {
            txtError.current.hidden = true;
            ValidarContra2 = false;
        }
    }

    return (
        <div>
            <NavBar />
            <div className="Contenido container">
                <br />
                <div className="Signin bg-fourthcolor">
                    <form id="formRegistro" ref={formRegistro} onSubmit={addUser} className="form-inline" name="formRegistro" encType="multipart/form-data">
                        <br />
                        <div className="row mx-1">
                            <div id="Imagenes" className="col-4">
                                <img src={prueba} ref={imageRef} className="rounded mx-auto d-block" alt="Foto de Perfil" name="FotoRegistro" id="FotoRegistro"  />
                                <input type="file" ref={txtImagen} name="txtImagen" id="txtImagen" className="inputUploadFile" accept="image/*" onChange={onChangeIMG}/>
                                <label htmlFor="txtImagen" id="btnUploadfile" className="btn btn-outline-light my-2 border border-light border-2 txt-fourthcolor-hover fw-bold">Cargar Imagen</label>
                                <label htmlFor="" className="btn btn-outline-light my-2 border border-light border-2 txt-rojo-hover fw-bold" onClick={borrarImagen}>Eliminar</label>
                            </div>
                            <div className="col-8 " >
                                <div className="d-flex flex-row align-items-center mb-3">
                                    <i className="fas fa-user fa-lg me-3 fa-fw txt-textcolor"></i>
                                    <input ref={txtNombre} type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder='Nombre completo' value={nombre}  onChange={(e) => { setNombre(e.target.value) } }>
                                    </input>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-3">
                                    <i className="fas fa-key fa-lg me-3 fa-fw txt-textcolor"></i>
                                    <input ref={txtContra} type="password" id="txtContra" name="txtContra" className="form-control" placeholder='Contraseña' value={contra} onKeyUp={onChangeContra1} onChange={(e) => { setContra(e.target.value) }}>
                                    </input>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-3">
                                    <i className="fas fa-key fa-lg me-3 fa-fw txt-textcolor"></i>
                                    <input ref={txtContra2} type="password" id="txtContraseña2" name="txtContraseña2" className="form-control" placeholder="Confirmar contraseña" onKeyUp={onChangeContra2} onChange={(e) => { setContra2(e.target.value) }}/>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-3">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw txt-textcolor"></i>
                                    <input ref={txtCorreo} type="email" id="txtCorreo" name="txtCorreo" className="form-control" placeholder="Correo" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <label hidden id="ErrorContraseña" ref={txtError}>Errores en la contraseña:</label> <br></br>
                        <button type="submit" ref={btnRegistro} className="btn btn-outline-light my-2 border border-light border-2 txt-fourthcolor-hover fw-bold" id="btnSignin" >
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
