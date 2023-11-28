import React from 'react'
import '../CssPagesFooter/ProductsFooter.css';
import new_collection from '../Components/Assets/new_collections'
import Item from '../Components/Item/Item'

function ProductsFooter() {
    return (
        <div className='productsfooter'>
            <h1>Check our Products</h1>
            <hr />
            <div className="productsfooter-item">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default ProductsFooter