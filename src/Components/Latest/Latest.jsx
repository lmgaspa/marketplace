import React from 'react'
import './Latest.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

function Latest() {
    return (
        <div className='latest'>
            <h1>Latest Collection</h1>
            <hr />
            <div className="latest-item">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Latest