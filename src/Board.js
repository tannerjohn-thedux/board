import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';


class Board extends Component {
  constructor(props) {
    super(props);
  
    this.state={
  
    }
    
  }
 
  propTest = () =>{
 
 // var test = this.props.data
  
// alert(this.props.data)
 
//  alert(this.props.data2)
  console.log(this.props.exTest)
var arrayTmp = this.props.msgList
console.log(arrayTmp);
 }
 kenyo = () => {
          console.log(this.props.msgList)
          console.log(this.props.exTest)
 }
 
 
  render() {
 
    return (
      
      <div className="Board">
   
        <h1>{this.props.data}</h1>
       
          Board Container 
  
          <button onClick={this.propTest}>tetete</button>
          <button onClick={this.kenyo}>kekeke</button>
           
     
      </div>
    );
  }
}

export default Board;
