import React from "react";
import { Routes, Route } from "react-router-dom";
import { Parts } from "../Components/Utils/Parts";
import Products from '../Pages/Products';
import Home from "../Screens/Home";
import Product from "../Pages/Product";

export default () => {
    return(
        <Routes>
            <Route element= {<Home/>} path="/" /> 
            <Route element= {<Products/>} path="/products" />
            {Parts.map(part =>{
                return(
                    <Route path={part.path} element={<Product titulo={part.name} image={part.pic}/>} key={part.id}/>
                )
            }
            )}  
        </Routes>
    )
}