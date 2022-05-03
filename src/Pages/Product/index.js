import React from "react";

export default function Product(props){
    return(
        <div>
        <img src={props.image} alt='imagem do produto'/>
        <h1>{props.titulo}</h1>
        </div>
    )
}