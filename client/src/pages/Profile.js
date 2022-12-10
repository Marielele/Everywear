import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { LilFooter } from '../components/LilFooter';
import prueba from '../imgs/no-image.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import uniqid from 'uniqid';
import CardList from '../components/CardList';
import AddressList from '../components/AddressList';
import { useNavigate } from 'react-router-dom';

const txtImagen = React.createRef();
const imageRef = React.createRef();
const formPerfil = React.createRef();

export default function Profile() {

    const navigate = useNavigate();
    const [img, setImage] = useState('');

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

    const [tarjeta, setTarjeta] = useState('');
    const [fechaVencimiento, setfechaVencimiento] = useState('');
    const [cvv, setCvv] = useState('');

    const [dataTarjetas, setDataTarjetas] = useState([]);

    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');
    const [colonia, setColonia] = useState('');
    const [codigoP, setCodigoP] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [estado, setEstado] = useState('');

    const [dataDirecciones, setDataDirecciones] = useState([]);

    useEffect(() => {
        const us = {
            idU: activeUser.id
        }
        axios.post('api/paymethod/getpays', us).then(res => {
            console.log(res.data)
            setDataTarjetas(res.data)
        }).catch(err => {
            console.log(err)
        })
        axios.post('api/address/getaddresses', us).then(res => {
            console.log(res.data)
            setDataDirecciones(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [activeUser.id])

    const listaTarjetas = dataTarjetas.map(card => {
        return(
            <div key={card.idTarjeta}>
                <CardList card={card}/>
            </div>
        )
    })

    const listaDirecciones = dataDirecciones.map(dire => {
        return(
            <div key={dire.idAddress}>
                <AddressList dire={dire} />
            </div>
        )
    })

    function updateUser(e) {
        e.preventDefault();
        var upUser = {
            idU: activeUser.id,
            imgUrl: activeUser.imgUrl
        }
        if(nombre !== ""){
            upUser.nombre = nombre
        }
        if(email !== ""){
            upUser.email = email
        }
        if(contra !== ""){
            upUser.contra = contra
        }
        
        axios.post('api/user/updateuser', upUser).then(res => {
            alert('Usuario actualizado')
            var newActiveUser = {
                username: res.data.nombre,
                email: res.data.email,
                id: res.data.idU,
                imgUrl: res.data.imgUrl
            }
            sessionStorage.setItem('activeUser', JSON.stringify(newActiveUser))
            navigate(0)
        }).then(err => { console.log(err) })
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

    function addPaymethod() {
        if(tarjeta!== "" && fechaVencimiento !== "" && cvv !== ""){
            var card = {
                tarjeta: tarjeta,
                fechaVencimiento: fechaVencimiento,
                cvv: cvv,
                idTarjeta: 'CARD' + uniqid(),
                idU: activeUser.id
            }
            axios.post('/api/paymethod/createpay', card).then(res => {
                alert(res.data)
                navigate(0)
            }).then(err => { console.log(err) })
        } else {
            alert("Faltan datos")
        }
    }

    function addShippingAddress() {
        if(calle!== "" && numero !== "" && colonia !== "" && codigoP !== "" && municipio !== "" && estado !== ""){
            var address = {
                calle: calle,
                numero: numero,
                colonia: colonia,
                codigoP: codigoP,
                municipio: municipio,
                estado: estado,
                idAddress: 'ADDRESS' + uniqid(),
                idU: activeUser.id
            }
            axios.post('/api/address/createaddress', address).then(res => {
                alert(res.data)
                navigate(0)
            }).then(err => { console.log(err) })
        } else {
            alert("Faltan datos")
        }
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
                        <form id="formPerfil" name="formPerfil" ref={formPerfil} onSubmit={updateUser}>
                            <div className="row">
                                {/*<div id="Imagenes" className="col-5 align-items-center">
                                     <img src={activeUser.imgUrl} ref={imageRef} className="rounded mx-auto d-block" alt="Foto de Perfil" id="FotoRegistro" />
                                    <input type="file" ref={txtImagen} name="txtImagen" id="txtImagen" className="inputUploadFile" accept="image/*" onChange={onChangeIMG}/>
                                    <label htmlFor="txtImagen" id="btnUploadfile" className="btn btn-outline-success my-2">Cargar Imagen</label>
                                    <label htmlFor="" className="btn btn-outline-danger my-2" onClick={borrarImagen}>Eliminar</label>
                                    <br />
                                </div> */}
                                <div className="col-12">
                                    <div className="form-group">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <input type="text" id="txtNombre" name="txtNombre" value={nombre} onChange={(e) => { setNombre(e.target.value) }} placeholder={activeUser.username} className="form-control" maxLength="50" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <input type="email" id="txtCorreo" name="txtCorreo" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder={activeUser.email} maxLength="50" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                            <input type="password" id="txtContraseña" name="txtContraseña" value={contra} onChange={(e) => { setContra(e.target.value) }} className="form-control" placeholder="Contraseña" maxLength="20" />
                                            {/*<i className="fas fa-eye fa-lg me-3 fa-fw" id="mostrar" type="button"></i>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label hidden id="ErrorContraseña">Errores en la contraseña:</label>
                            <div className="tile-footer">
                                <p align="right">
                                    <button id="btnActionForm" className="btn btn-outline-success" type="submit">
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
                                    <input type="text" id="txtTarjeta" name="txtTarjeta" value={tarjeta} onChange={(e) => { setTarjeta(e.target.value) }} className="form-control" placeholder="Tarjeta" maxLength="50" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <input type="text" id="txtVencimiento" name="txtVencimiento" value={fechaVencimiento} onChange={(e) => { setfechaVencimiento(e.target.value) }} className="form-control" placeholder="Fecha de vencimiento" maxLength="50" />
                                    </div>
                                </div>
                                <div className="form-group col">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <input type="text" id="txtCVV" name="txtCVV" value={cvv} onChange={(e) => { setCvv(e.target.value) }} className="form-control" placeholder="CVV" maxLength="4" />
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
                                        <input type="text" id="txtCalle" name="txtCalle" value={calle} onChange={(e) => { setCalle(e.target.value) }} className="form-control" placeholder="Calle" maxLength="50" />
                                    </div>
                                </div>
                                <div className="form-group col">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <input type="text" id="txtNumero" name="txtNumero" value={numero} onChange={(e) => { setNumero(e.target.value) }} className="form-control" placeholder="Numero" maxLength="50" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <input type="text" id="txtColonia" name="txtColonia" value={colonia} onChange={(e) => { setColonia(e.target.value) }} className="form-control" placeholder="Colonia" maxLength="50" />
                                    </div>
                                </div>
                                <div className="form-group col">
                                    <div className="d-flex flex-row align-items-center mb-2">
                                        <input type="text" id="txtcodigoP" name="txtcodigoP" value={codigoP} onChange={(e) => { setCodigoP(e.target.value) }} className="form-control" placeholder="Codigo Postal" maxLength="10" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="d-flex flex-row align-items-center mb-2">
                                    <input type="text" id="txtMunicipio" name="txtMunicipio" value={municipio} onChange={(e) => { setMunicipio(e.target.value) }} className="form-control" placeholder="Municipio" maxLength="50" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="d-flex flex-row align-items-center mb-2">
                                    <input type="text" id="txtEstado" name="txtEstado" value={estado} onChange={(e) => { setEstado(e.target.value) }} className="form-control" placeholder="Estado" maxLength="50" />
                                </div>
                            </div>
                            <div className="tile-footer">
                                <p align="right">
                                    <button id="btnActionForm" onClick={addShippingAddress} className="btn btn-outline-success" type="button">
                                        Guardar
                                    </button>
                                </p>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

                <div className="Contenido" id="Contenido4">
                    <div className="Perfil bg-thirdcolor w-100 text-center">
                        <div className="row align-items-center" >
                            <div className="col-12 col-sm-3">
                                <img src={activeUser.imgUrl} className="rounded mx-auto d-block" alt="Foto de Perfil" id="FotoRegistro" />
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
                        {listaTarjetas}
                    </div>
                    <br />
                    <div className="Perfil bg-thirdcolor w-100 txt-white">
                        <div className='row mx-1 mb-2'>
                            <h4 className="text-left col-10" id=""> Direcciones de envio </h4>
                            <button className="btn btn-outline-light txt-right txt-thirdcolor-hover col-2 fw-bold border border-2 border-light" onClick={envioShow}>
                                Agregar
                            </button>
                        </div>
                        {listaDirecciones}
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
