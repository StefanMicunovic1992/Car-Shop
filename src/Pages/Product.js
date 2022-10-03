import React, { Component } from 'react';
import ShopContext from '../Context/ShopContext';
import Navigation from '../Components/Navigation';
import "./product.css";

class Product extends Component {

    render() {

        return (

            <ShopContext.Consumer>{
                context => (
                    <div className='mainDiv'>

                        <Navigation cartItemNumber={context.cart.reduce((count, curItem) => {

                            return count + curItem.quantity;
                        }, 0)}></Navigation>

                            <h1>Mercedes-Benz Shop</h1>
                        <main className="main">
                            <ul>
                                {
                                    context.products.map(product => (

                                        <li key={product.id} className='oneProduct'>
                                                <img src={product.img} alt={product.title}></img>
                                                <span className='name'>{product.title}</span>
                                                <span className='price'>Price: {product.price} $</span>
                                                <button className='addToCartBTN' onClick={() => context.addToCart(product)}>Dodaj u Korpu</button>
                                        </li>

                                    ))
                                }
                            </ul>
                        </main>

                    </div>

                )}</ShopContext.Consumer>
        )
    }

}
export default Product;