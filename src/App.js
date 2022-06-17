import React from "react";
import Header from './components/header'
import Main from './components/main'
import { Component } from 'react';


export default class Principal extends Component{

render(){
  return(
    <div>
        <Header/>
        <Main />
    </div>
  )
}
}