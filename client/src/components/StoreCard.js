import React from 'react'
import { Link } from 'react-router-dom'

function StoreCard() {
    return (
        <div>
            <div className="col">
                <div className="card text-bg-dark border-0">
                    <img src="https://cdn.logojoy.com/wp-content/uploads/20201113115006/45994495_padded_logo-600x600.png" className="card-img" alt="..." />
                    <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                        <Link className="stretched-link" to={`/shop`}></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreCard