import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const[selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (size) => {
        setSelectedSize(size)
    }
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className='productdisplaylistmini-responsive'>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
                <div className="productdisplay-img-listmini">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">${product.new_price}
                    </div>
                    </div>
                    <div className="productdisplay-right-description">
                        A lightweight...
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            <button className={selectedSize === 'S' ? 'selected' : ''}
                            onClick={() => handleSizeChange('S')}>S</button>
                            <button className={selectedSize === 'M' ? 'selected' : ''}
                            onClick={() => handleSizeChange('M')}>M</button>
                            <button className={selectedSize === 'L' ? 'selected' : ''}
                            onClick={() => handleSizeChange('L')}>L</button>
                            <button className={selectedSize === 'XL' ? 'selected' : ''}
                            onClick={() => handleSizeChange('XL')}>XL</button>
                            <button className={selectedSize === 'XX1' ? 'selected' : ''}
                            onClick={() => handleSizeChange('XX1')}>XX1</button>
                        </div>
                    </div>
                    <div className='product-btn-add'>
                    <button className="productdisplay-add" onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                    </div>
                    <p className='productdisplay-right-category'>
                        <span>Category :</span>
                        Women, T-Shirt. Crop Top
                    </p>
                    <p className='productdisplay-right-category'>
                        <span>Tags :</span>
                        Modern, Latest
                    </p>
                </div>
            </div>
    )
}

export default ProductDisplay