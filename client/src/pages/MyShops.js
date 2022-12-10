import React, { useState, useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { LilFooter } from '../components/LilFooter'
import axios from 'axios'
import StoreCard from '../components/StoreCard'

export default function MyShops() {

    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);

    const [dataStore, setDataStore] = useState([])

    useEffect(() => {
        axios.post('/api/shop/getmyshops', { idU: activeUser.id }).then(res => {
            console.log(res.data)
            setDataStore(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [activeUser.id])

    const listaTiendas = dataStore.map(tienda => {
        return (
            <div>
                <StoreCard tienda={tienda} />
            </div>
        )
    })

    return (
        <div>
            <NavBar />
            <br />
            <div className='container'>
                <h3>Mis tiendas</h3>
                <hr />
                <div className="row row-cols-1 row-cols-md-6 g-3">
                    {listaTiendas}
                </div>
            </div>
            <LilFooter />
        </div>
    )
}
