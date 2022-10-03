import React, { Component } from 'react';

import { storeProduct } from "./data";
import ShopContext from './ShopContext';


class GlobalState extends Component {

    state = storeProduct;

    addToCart = product => {


        const updateCart = this.state.cart;


        const index = updateCart.findIndex(item => item.id === product.id);

        if (index < 0) {


            updateCart.push({ ...product, quantity: 1 })
        } else {

            const updateItem = {
                ...updateCart[index]
            }
            updateItem.quantity++;
            updateCart[index] = updateItem;
        }


        this.setState({ cart: updateCart })

    }

    ItemDecrease = removeId => {
        const updateCart = this.state.cart;


        const index = updateCart.findIndex(item => item.id === removeId);

        const updateItem = {
            ...updateCart[index]
        }

        updateItem.quantity--;

        if (updateItem.quantity === 0) {

            updateCart.splice(index, 1);
        } else {
            updateCart[index] = updateItem;
        }

        this.setState({ cart: updateCart })
    }

    ItemIncrease = id => {

        const updateCart = this.state.cart;


        const index = updateCart.findIndex(item => item.id === id);

        const updateItem = {
            ...updateCart[index]
        }

        updateItem.quantity++;

        updateCart[index] = updateItem;

        this.setState({ cart: updateCart })

    }
    removeAllItem = () => {

        const updateCart = this.state.cart;
        updateCart.length = '';
        this.setState({ cart: updateCart })
    }

    setTotalPrice = () => {

        const updateCart = this.state.cart;

        let totalPrice = 0;
        updateCart.forEach(elem => {

            totalPrice += elem.price * elem.quantity
        })

        return totalPrice;

    }

    showModal = () =>{
        const updateCart = this.state.cart;

        if(updateCart.length == 0){
            alert('Your cart is empty')
            return
        }else{
            let divForHide = document.getElementById('finishShopping');
                divForHide.style.display = 'flex';
        }
    }

    finishShopping = () => {

        let nameInput = document.getElementById('nameInput');
        let addressInput = document.getElementById('addressInput');

        if (nameInput.value !== '' && addressInput.value !== '') {
            alert('thank you for shopping')
            // hideModal();
            nameInput.value = '';
            addressInput.value = '';
            let divForHide = document.getElementById('finishShopping');
            divForHide.style.display = 'none';
            const updateCart = this.state.cart;
            updateCart.length = '';
            this.setState({ cart: updateCart })

        } else {
            alert('you must fill in all fields')
        }
    }


    render() {


        return (

            <ShopContext.Provider value={
                {
                    products: this.state.products,
                    cart: this.state.cart,
                    addToCart: this.addToCart,
                    ItemDecrease: this.ItemDecrease,
                    removeAllItem: this.removeAllItem,
                    ItemIncrease: this.ItemIncrease,
                    setTotalPrice: this.setTotalPrice,
                    finishShopping: this.finishShopping,
                    showModal: this.showModal
                }

            }>


                {this.props.children}


            </ShopContext.Provider>




        )

    }



}

export default GlobalState;