import React from 'react'
import './CheckOffers.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

function CheckOffers() {
    return (
        <div className='checkoffers'>
            <h1>Check Offers</h1>
            <hr />
            <div className="checkoffers-item">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default CheckOffers