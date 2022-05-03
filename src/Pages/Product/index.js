import React from "react";

export default function Product(props){
    return(
        <div>
        <img src={props.image} alt='qqr coisa'/>
        <h1>{props.titulo}</h1>
        </div>
    )
}