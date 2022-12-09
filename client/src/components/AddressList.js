import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddressList({ dire }) {

    const navegar = useNavigate()

    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);

    function deleteAddress(idAddress, idU) {
        axios.post('/api/address/deleteaddress', { idAddress: idAddress, idU: idU }).then(res => {
            console.log(res.data) 
            alert(res.data)  
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <ul>
                <li>
                    <div className='row mx-1'>
                        <div className="col-11">
                            {dire.calle}, {dire.numero}, {dire.colonia}, {dire.codigoP}, {dire.municipio}, {dire.estado}
                        </div>
                        <button onClick={() => { deleteAddress(dire.idAddress, activeUser.id) }} className="btn btn-outline-light txt-right txt-rojo-hover col-1 fw-bold border border-2 border-light">
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default AddressList