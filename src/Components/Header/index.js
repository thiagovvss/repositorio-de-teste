import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Container>
            <div className="header">
                <h1>LB Parts</h1>
                <ul className="ul1">
                    <Link to="/"><li>Inicio</li></Link>
                    <li>|</li>
                    <Link to="/products"><li>Produtos</li></Link>
                </ul>
            </div>
        </Container>
    )
}

export default Header;