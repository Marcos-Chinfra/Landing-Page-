import React from 'react'
import data from "../../data.json"
import like from '@icons/favorite.svg';
import cart from '@icons/shopping_cart.svg';
import "../styles/products.scss";

const Products = () => {
    return (
        <div className='products_container'>
            <h1>Products</h1>
            <div className='card_container'>
            {data.map( item => 
            <div key={item.id} className="card_container-item">
                <img src={item.img} />
                <p>{item.name}</p>
                <div className='card_container-item-options'>
                    <img src={like}/>
                    <span>{`$${item.price}`}</span>
                    <img src={cart}/>
                </div>
            </div> )}
        </div>
        </div>
        
    );
}

export default Products;