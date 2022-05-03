import styled from 'styled-components';

export const ContainerParts = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    flex-wrap: wrap;
    margin-top: 50px;
    padding: 40px;
    padding-top: 25px;
    padding-right: 0;
    padding-bottom: 0;
    border-radius: 20px;  
    background-color: rgba(128, 128, 128, 0.295);
    box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.233);
    width: 1260px;
    
    a{
        
        color: black;
    }

    .peças{
        text-align: center;
    }

     
    .price{
        background-color: rgba(128, 128, 128, 0.26);
        margin: auto;
        margin-bottom: 20px;
        width: 100px;
        font-weight: bold;
        padding: 7px;
        border-radius: 10px;
        font-size: 15px;
    }

    .price:hover{
        background-color: rgb(52, 255, 52);
        transition: 2s all;
    }

    .image{
        width: 270px;
        height: 260px;
        border-radius: 5px;
    }


`