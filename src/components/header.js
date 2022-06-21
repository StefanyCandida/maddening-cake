import React, { Component } from "react";
import foto from './img/Grupo-de-máscara-2.png'
import styled from "styled-components";


const Div = styled.div`
display:flex;
flex-direction:column;
height:145vh;
background-image:url(${foto});
background-repeat: no-repeat;
background-size: 100%;
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
 width: 45%;
 display:flex;
 align-items:center;

`
const Ul = styled.ul`
display:flex;
justify-content:space-between;
align-items:center;
width: 100%;
height:60%;


`
const Li = styled.li`
    width: 30%;
    heigth:60%;
    font-size:2em;
    font-weight: 300;
    text-align:center;
        &:hover{
        border:solid;
        cursor:point;
        box-shadow: #61dafb;
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