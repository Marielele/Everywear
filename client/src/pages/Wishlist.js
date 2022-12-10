import React, { useState, useEffect } from 'react'
import { LilFooter } from '../components/LilFooter'
import { NavBar } from '../components/NavBar'
import axios from 'axios'
import WishlistCard from '../components/WishlistCard'

export default function Wishlist() {

    let activeUser = sessionStorage.getItem('activeUser');
    activeUser = JSON.parse(activeUser);

    const [datalist, setdatalist] = useState([])

    useEffect(() => {
        axios.post('/api/wishlist/getlist', { idU: activeUser.id }).then(res => {
            console.log(res.data)
            setdatalist(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [activeUser.id])

    const listawishlist = datalist.map(wishes => {
        return(
            <div>
                <WishlistCard wishes={wishes}/>
            </div>
        )
    })

    return (
        <div>
            <NavBar />
            <div>
                <div className='container mt-4 mb-5 pb-5'>
                    <h1 className='text-center'>Lista de deseos</h1>
                    <hr />
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {listawishlist}
                    </div>
                </div>
            </div>
            <LilFooter />
        </div>
    )
}
