import React, { useState } from 'react'
import { LilFooter } from '../components/LilFooter'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom';
import userIcon from '../imgs/userProvis.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [contra, setContra] = useState('');

    function searchUser() {
        var serchedU = {
            email: email,
            contra: contra
        }
        axios.post('api/user/searchuser', serchedU).then(res => {
            if(res.data === "Datos incorrectos"){
                alert("Datos incorrectos")
            } else {
                var activeUser = {
                    username: res.data.nombre,
                    email: res.data.email,
                    id: res.data.idU
                }
                sessionStorage.setItem('activeUser', JSON.stringify(activeUser))
                navigate(`/`);
            }
        }).then(err => {console.log(err)})
    }

    return (
        <div>
            <NavBar />
            <div className="Contenido container">
                <br />
                <div className="Login bg-fourthcolor">
                    <img src={userIcon} alt='Everywear' width={100} />
                    <form id="formLogin" name="formLogin" className='mt-3'>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw txt-textcolor"></i>
                            <input type="email" id="txtCorreo" name="txtCorreo" className="form-control" placeholder="Correo" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw txt-textcolor"></i>
                            <input type="password" id="txtContraseña" name="txtContraseña" className="form-control" placeholder="Contraseña" value={contra} onChange={(e) => { setContra(e.target.value) }}/>
                        </div>
                        <button onClick={searchUser} className="btn btn-outline-light my-2 border border-light border-2 txt-fourthcolor-hover fw-bold" id="iniciarsesion" type="button">Iniciar Sesion</button>
                        <br /><br />
                        <p className='fw-bold txt-textcolor'>Aun no tienes cuenta? <Link to={`/signin`} className='Link'>Registrate</Link></p>
                    </form>
                </div>
            </div>
            <LilFooter />
        </div>
    )
}
