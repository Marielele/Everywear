import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { LilFooter } from '../components/LilFooter'
import uniqid from 'uniqid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddShop() {

    const navigate = useNavigate()

    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    function createShop(){
        var newShop = {
            nombre: nombre,
            descripcion: descripcion,
            idTienda: 'SHOP' + uniqid(),
            idU: activeUser.id
        }
        console.log(newShop)
        axios.post('/api/shop/createshop', newShop).then(res => {
            alert(res.data)
            navigate(`/myshops`);
            //console.log(res.data)
        }).then(err => {console.log(err)})
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
                    <form id="formNoticia" name="formNoticia">
                        <div className="d-flex flex-row align-items-center" >
                            <label htmlFor="txtTitulo">Nombre de la tienda</label>
                            <input value={nombre} onChange={(e) => { setNombre(e.target.value) }} type="text" id="txtTitulo" name="txtTitulo" className="form-control" required maxLength="100" />
                        </div> <br />
                        <div className="" >
                            <label htmlFor="">Descripcion de la tienda</label>
                            <textarea value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }} id="txtDescripcion" name="txtDescripcion" className="form-control" rows="3" required maxLength="250"></textarea>
                        </div> <br />

                        <div className="d-flex flex-row align-items-center rowEspaciado" id="AgregarArchivo" >
                            <div className="col-2"><label>Subir logotipo</label></div>
                            <input type="file" id="txtImagen" name="txtImagen" className="form-control btn btn-outline-secondary" />
                        </div>
                        <br />
                        <p align="right">
                            <button onClick={createShop} className="btn border border-2 btn-maincolor fw-bold" type="button">
                                Enviar
                            </button>
                        </p>
                    </form>
                </div>
                <img hidden src="Assets/images/spinner.svg" className="imagencarga" alt='Cargando...' />
                <br />
            </div>
            <LilFooter />
        </div>
    )
}
