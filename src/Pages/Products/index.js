import React from "react";
import { Link } from "react-router-dom";
import { Parts } from "../../Components/Utils/Parts";
import { ContainerParts } from "./styles";

export default function Products(){
    return(
        <ContainerParts>
    {Parts.map(part =>{
        return(
            <>
                <div key={part.id} className="peças">
                    <img src={part.pic} alt='Bodykit M3 para F30' className="image"></img>
                    <h3>{part.name}</h3>
                    <p>{part.info}</p>
                   <Link to={part.path}><p className="price">{part.price}</p></Link>
                </div>
            
            </>
        )

    }
    )}
    </ContainerParts>
    )




}