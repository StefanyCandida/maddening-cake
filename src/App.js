import React from "react";
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import { Component } from 'react';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    list-style: none;
}
`
export default class Principal extends Component{

render(){
  return(
    <div>
        <GlobalStyle/>
        <Header/>
        <Main />
        <Footer />
    </div>
  )
}
}