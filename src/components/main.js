import React, {Component} from "react";
import Imagem from "../components/img/Grupo-de-máscara-2.png";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    list-style: none;
}
`

const Div = styled.div`
display:flex;
flex-direction:column;
height:100vh;
background-image: url(./img/Grupo-de-máscara-2.png);
`


export default class main extends Component{

render(){
    return(

        <Div>
            <GlobalStyle/>
        
        </Div>
    )
}
}