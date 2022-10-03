import React, { Component } from 'react';
import './Cart.css'
import { GrClose } from "react-icons/gr";

import ShopContext from '../Context/ShopContext';

import Navigation from '../Components/Navigation';


class Cart extends Component {

    render() {
        function setPrice(x, y) {
            console.log(x);
            console.log(y);
            let price = x * y;
            return price
        }

        function hideModal(){

            let divForHide = document.getElementById('finishShopping');
            divForHide.style.display = 'none';
        }
        
        return (
            <ShopContext.Consumer>

                {
                    context => (

                        <div>

                            <Navigation cartItemNumber={context.cart.reduce((count, curItem) => {

                                return count + curItem.quantity;
                            }, 0)}></Navigation>


                            <main className='cart'>
                                {context.cart.length == 0 && <p id='noItem'>No item in cart!!!</p>}
                                <ul>
                                    {context.cart.map(curItem => (
                                        <li key={curItem.id} className="oneItem">
                                            <span className='name'>{curItem.title}</span>
                                            <div className='quantityDiv'>
                                                <button onClick={() => context.ItemDecrease(curItem.id)}>-</button>
                                                <span>{curItem.quantity}</span>
                                                <button onClick={() => context.ItemIncrease(curItem.id)}>+</button>
                                            </div>
                                            <span className="price">price: {setPrice(curItem.quantity, curItem.price)}$</span>
                                        </li>

                                    ))}
                                </ul>
                                <div className='footerOfCart'>
                                    <button className='footerBtn' onClick={() => context.removeAllItem()}>DELETE ALL</button>
                                    <button className='footerBtn' onClick={() => context.showModal()}>ORDER PRODUCTS</button>
                                    <p id='totalPrice'>Total price: {context.setTotalPrice()} $</p>
                                </div>
                            </main>
                            <div id='finishShopping'>
                                <div id='finishShopping2'>
                                   <GrClose id='iconClose' onClick={() => hideModal()}></GrClose>
                                        <h3>For finish shopping enter your data</h3>
                                        <input type="text" placeholder='your name and surname' id='nameInput' required/>
                                        <input type="text" placeholder='your address' id='addressInput' required/>
                                        <input type="submit" id='finishShopBtn' value="Order car" onClick={() => context.finishShopping()}/>
                                </div>
                            </div>
                        </div>

                    )

                }

            </ShopContext.Consumer>


        )
    }



}
export default Cart;