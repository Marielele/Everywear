import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function CardList({ card }) {

    const navegar = useNavigate()

    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);

    function deletePay(idTarjeta, idU) {
        axios.post('/api/paymethod/deletecard', { idTarjeta: idTarjeta, idU: idU }).then(res => {
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
                    <div className='row mx-1 ' id={card.idTarjeta}>
                        <div className="col-11">{card.tarjeta}, {card.fechaVencimiento}</div>
                        <button onClick={() => { deletePay(card.idTarjeta, activeUser.id) }} className="btn btn-outline-light txt-right txt-rojo-hover col-1 fw-bold border border-2 border-light">
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CardList