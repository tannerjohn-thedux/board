import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board.js';
 

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
          name:'',
          msg:'',
          msgList:[],
          nameList:[],
          exTest:'meowmeow',
          items:[{
            id:'ididid',
            name:'',
            msg:''
          }]
          
        }
 
      }

     FormClick = () => {
      var NameValue = document.getElementById('name').value
      var MsgValue = document.getElementById('msg').value
      this.setState({name: NameValue});
     // this.setState({msg: MsgValue});
      this.setState({msgList: MsgValue})
      var IdTest = 'idmeow'
      var nameTest = 'namemeow'
      var msg = 'msgmeow'
      console.log(this.state.items.id)
      // this.setState({items.id: Idtest});
      // var TMP = document.getElementById('msg').value
      // var mlTmp = this.state.msgList
      // mlTmp.push(TMP);
      // this.setState({msgList:mlTmp})
      // console.log(mlTmp)
      // var tmp2 = this.state.nameList
      // tmp2.push(NameValue)
      // this.setState({nameList:tmp2})




    }

   
    render() 
    
    {
      const returnTest = () => {
        return(
          <div>
          <span>{this.state.name}</span>
          <br/>
         <span>{this.state.msg}</span>
        </div>
        )
      }

      // const msgListMap = this.state.msgList.map((item) => {
      //   return <li key={(item)}>{item}</li>
      // })
      
      // const nameListMap = this.state.nameList.map((item) => {
      //   return <li key ={(item)}>{item}</li>
      // })
      
    return (
      <div className="Form">
        <header className="Form-header">
     
        </header>

        <code>NAME: </code><input id='name'placeholder = 'insert ypur name here'/>
        <br/>
        <br/>
        <code>WHISPER: </code><input id='msg'placeholder = 'tell me what you think'/>
        <br/>
        <br/>
        <button onClick={this.FormClick} >AppTestButton</button>
       <br/>
       <br/>
      {returnTest()}
      </div>
    );
  }
}

export default Form;

　