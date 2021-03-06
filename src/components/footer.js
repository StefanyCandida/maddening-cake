import { Component } from 'react';
import styled from "styled-components";
import insta from './img/Insta.svg';
import twitter from './img/Twitte.svg';
import facebook from './img/Face.svg';
import pinterest from './img/Pinteres.svg'

const Section = styled.section`
height:140vh;
`
const Sub = styled.div`
height:70%;
background-color:#DFE4DE;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const DivT = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:30%;


`
const Scribe = styled.h3`
font-size:50px;
font-weight: 300;

`

const Psub = styled.p`
font-size:40px;
font-weight: 100;
`


const DivI = styled.form`
height:10%;
width:40%;

`

const Input = styled.input`
height:100%;
width:100%;
font-size:26px;
border:none;
`
const DivB = styled.div`
height:30%;
width:15%;
display:flex;
align-items:center;

`
const Button = styled.button`
font-size:40px;
height:40%;
width:100%;
background:none;
border:solid 7px;
&:hover{
    border:solid 5px;
    cursor: pointer;
    box-shadow: inset 15vw 0#EEE8AA;
}
`

const Redes = styled.div`
height:25%;
display:flex;
justify-content:space-between;
align-items:center;

`
const Social = styled.div`
width:20%;
display:flex;
justify-content:space-evenly;
align-items:center;

`
const Img = styled.img`
width:15%;
&:hover{
    transform:scale(1.2);   
    cursor: pointer;
   }

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
        cursor: pointer;
        box-shadow: inset 13vw 0#EEE8AA;
}
`

const Layout = styled.div`
height:5%;
background-color:#446061;
display:flex;
align-items:center;
justify-content:center;


`
const P = styled.p`
color:white;
`

export default class Principal extends Component{

render(){
  return(
    <Section>
        <Sub>
            <DivT>
                <Scribe>SUBSCRIBE</Scribe>
                <Psub>Sign up for newsletter</Psub>
            </DivT>
            
            <DivI> 
                <Input tipe="email" placeholder='Your Email'/>
            </DivI>
           
            <DivB>
                <Button>SUBMIT</Button>
            </DivB>
            
        </Sub>
        <Redes>
            <Social>
                <Img src={insta}/>
                <Img src={twitter}/>
                <Img src={facebook}/>
                <Img src={pinterest}/>
            </Social>
            <Nav>
            <Ul>
                <Li>ABOUT</Li>
                <Li>RECIPES</Li>
                <Li>SUBSCRIBE</Li>

            </Ul>
        </Nav>
        </Redes>
        <Layout>
            <P>Layout produzido por Vai na Web para fins exclusivamente educacionais. Refer??ncia: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</P>
        </Layout>
        
    </Section>
  )
}
}