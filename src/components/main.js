import React, {Component} from "react";
import styled from "styled-components";
import cake from './img/cake.png'
import pizza from './img/pizza.png'
import coffee from './img/coffe.png'
import colher from './img/colher.png'

const Section = styled.section`
display:flex;
flex-direction:column;
background-image: url(./img/Grupo-de-máscara-2.png);
background-color:#f2f4f1;
`
const Titulo = styled.div`
width:100%;
height: 40vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`

const Hdois = styled.h2`
font-size:3em;
height: 30%;
`

const Tracinho = styled.div`
width:100px;
border:solid;

`
const Gimagens = styled.div`
height: 90vh;
display:flex;
justify-content:space-evenly;

`
const Fatia = styled.div`
height: 90%;
width:28%;
background-color:white;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
overflow: hidden;
`
const Figure = styled.figure`
height: 60%;
width:100%;
&:hover{
    transform:scale(1.05);
    cursor:pointer;
    transition:1s;    
           width:110%;
          height:50vh;
    
}

`
const Img = styled.img`
height: 100%;
width:100%;

`
const Text = styled.div`
height: 40%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const P = styled.p`
height: 40%;
display:flex;
align-items:center;
font-size: 30px;
`
const About = styled.div`
height: 85vh;
display:flex;
justify-content:space-evenly;
align-items:center;
`
const Afigure = styled.figure`
height: 100%;
width:50%;
`

const Box = styled.div`
height:100%;
width:50%;
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
background-color:white;
`
const Hbox = styled.div`
height:50%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`
const Pbox = styled.p`
width:70%;
height:50%;
font-size:20px;

`

export default class main extends Component{

render(){
    return(

        <Section>
            <Titulo>
                <Hdois>LATEST RECIPES</Hdois>
                <Tracinho></Tracinho>
            </Titulo>
            <Gimagens>
                <Fatia>
                    <Figure>
                        <Img src={cake}></Img>
                    </Figure>
                    <Text>
                        <Tracinho></Tracinho> 
                         <P>Red Velvet Cake</P>
                    </Text>
                </Fatia>
                <Fatia>
                     <Figure>
                        <Img src={pizza}></Img>
                     </Figure>
                     <Text>
                        <Tracinho></Tracinho>
                        <P>Margherit</P>       
                     </Text>

                </Fatia>
                <Fatia>
                    <Figure>
                        <Img src={coffee}></Img>
                    </Figure>
                    <Text>
                        <Tracinho></Tracinho>
                        <P>Peanut Smoothie</P>
                    </Text>
                </Fatia>                
            </Gimagens>
            <About>
                <Afigure>
                        <Img src={colher}></Img>
                </Afigure>
            
                <Box>
                    
                    <Hbox>
                         <Hdois>ABOUT</Hdois>
                         <Tracinho></Tracinho>
                    </Hbox>
                    <Pbox>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.
                    </Pbox> 
                </Box>
               

            </About>
        </Section>
    )
}
}