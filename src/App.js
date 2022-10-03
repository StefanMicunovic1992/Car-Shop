
import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalState from './Context/GlobalState';

import Product from './Pages/Product';
import Cart from "./Pages/Cart";

import "./App.css"


class App extends Component {


  render() {

    return (


      <GlobalState>

        <BrowserRouter>

          <Routes>

            <Route path="/" element={<Product></Product>}> </Route>
             <Route path="/cart" element={<Cart></Cart>}> </Route> 

          </Routes>

        </BrowserRouter>


      </GlobalState>


    )
  }



}


export default App;
