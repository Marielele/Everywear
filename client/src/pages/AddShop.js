import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { LilFooter } from '../components/LilFooter'
import uniqid from 'uniqid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const txtImagen = React.createRef();
const imageRef = React.createRef();
const formTienda = React.createRef();

export default function AddShop() {

    const navigate = useNavigate()

    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [img, setImage] = useState('');

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
                //imageRef.current.setAttribute("src", imgCodified);
    
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

    function createShop(e){
        e.preventDefault();
        var newShop = {
            nombre: nombre,
            descripcion: descripcion,
            idTienda: 'SHOP' + uniqid(),
            idU: activeUser.id
        } 
        var formData = new FormData(formTienda.current);
        formData.append("idU", activeUser.id)
        formData.append("idTienda", 'SHOP' + uniqid())
        if(nombre !== "" && descripcion !== ""){
            axios.post('/api/shop/createshop', formData).then(res => {
                alert(res.data)
                navigate(`/myshops`);
                //console.log(res.data)
            }).then(err => {console.log(err)})
        } else {
            alert("Faltan datos")
        }
    }

    return (
        <div>
            <NavBar />
            <div className="Contenido container" id="Contenido4">
                <br />
                <div className="row rowEspaciado">
                    <h3>Registrar Tienda</h3>
                </div>
                <div className="w-100">
                    <form id="formTienda" name="formTienda" ref={formTienda} onSubmit={AddShop} encType="multipart/form-data">
                        <div className="d-flex flex-row align-items-center" >
                            <label htmlFor="txtNombre">Nombre de la tienda</label>
                            <input value={nombre} onChange={(e) => { setNombre(e.target.value) }} type="text" id="txtNombre" name="txtNombre" className="form-control" required maxLength="100" />
                        </div> <br />
                        <div className="" >
                            <label htmlFor="txtDescripcion">Descripcion de la tienda</label>
                            <textarea value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }} id="txtDescripcion" name="txtDescripcion" className="form-control" rows="3" required maxLength="250"></textarea>
                        </div> <br />

                        <div className="d-flex flex-row align-items-center rowEspaciado" id="AgregarArchivo" >
                            <div className="col-2"><label>Subir logotipo</label></div>
                            <input type="file" id="txtImagen" name="txtImagen" ref={txtImagen} className="form-control btn btn-outline-secondary" onChange={onChangeIMG}/>
                        </div>
                        <br />
                        <p align="right">
                            <button onClick={createShop} className="btn border border-2 btn-maincolor fw-bold" type="button">
                                Enviar
                            </button>
                        </p>
                    </form>
                </div>
                
                <br />
            </div>
            <LilFooter />
        </div>
    )
}
