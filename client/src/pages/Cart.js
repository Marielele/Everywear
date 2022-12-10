import React, { useState, useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { LilFooter } from '../components/LilFooter'
import axios from 'axios';
import CardCart from '../components/CardCart';
import { useNavigate } from 'react-router-dom';

export default function Cart() {

    const navegar = useNavigate()

    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);

    const [datacarrito, setdatacarrito] = useState([])

    useEffect(() => {
        axios.post('api/cart/getcart', { idU: activeUser.id }).then(res => {
            console.log(res.data)
            setdatacarrito(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [activeUser.id])

    function comprar() {
        axios.post('/api/cart/deleteallobjs', { idU: activeUser.id }).then(res => {
            alert(res.data)  
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }

    const listaCarrito = datacarrito.map(obj => {
        return (
            <div>
                <CardCart obj={obj} />
            </div>
        )
    })

    return (
        <div>
            <NavBar />
            <div>
                <div className='container mt-4 mb-5'>
                    <h1 className='text-center'>Carrito de compras</h1>
                    <hr />
                    <div className='cartas mx-auto'>
                        {listaCarrito}
                    </div>
                    <div className='mt-4 text-end'>
                        <button onClick={comprar} className='btn bg-secondcolor btn-lg mt-2'>
                            Pagar ahora
                        </button>
                    </div>
                </div>
            </div>
            <LilFooter />
        </div>
    )
}
