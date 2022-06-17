import React, { Component } from "react";
import foto from './img/Grupo-de-máscara-2.png'
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
background-image:url("./img/Grupo-de-máscara-2.png");
background-image:url(./Grupo-de-máscara-2.png);
background-repeat: no-repeat;
background-size: cover;
`

const DivPrincipal = styled.div`
display:flex;
justify-content:space-between;
height:20%;
               
`
const Hdois = styled.h2`
font-size:3em;
width: 10%;
display:flex;
justify-content:center;
align-items:center;
font-weight: 500;
`

const Nav = styled.nav`
 width: 50%;
 display:flex;
 align-items:center;
`
const Ul = styled.ul`
display:flex;
justify-content:space-between;
width: 100%;
heigth:60%;
`
const Li = styled.li`
width: 40%;
heigth:60%;
font-size:2em;
font-weight: 300;
text-align:center;
&:hover{
    border:solid;
    cursor:point;
}
`

const DivSecundaria   = styled.div`
height:75%;
display:flex;
justify-content:center;
align-items:center;
`
const Hum = styled.h1`
font-size:6em;


`

export default class header extends Component{

render(){
    return(

        <Div>
            <GlobalStyle/>
        <DivPrincipal>
        <Hdois>RC</Hdois>
        <Nav>
            <Ul>
                <Li>ABOUT</Li>
                <Li>RECIPES</Li>
                <Li>SUBSCRIBE</Li>

            </Ul>
        </Nav>
        </DivPrincipal>  
        <DivSecundaria>
            <Hum>
            RECIPES
            </Hum>
        </DivSecundaria>  
        </Div>
    )
}
}