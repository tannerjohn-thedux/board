import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import {Button } from 'react-bootstrap';
import { Forms } from 'react-bootstrap';
import headerImg from './img/hahaa_header.jpg'
import haha from './img/hahaa_header.jpg';
import Borad from './Board.js';
 
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}


class App extends Component {
 
  
  constructor(props) {
    super(props);
  
    this.state={
      name:'',
      msg:'',
      msgList:[],
      exTest:'meowmeow',
      data:[{id: 0, name: "takashi", msg: "ばすらいといやー"},
            {id: 1, name: "miki", msg: "ねむれるますだ"},
            {id:2, name: "sensei", msg : "しょんべんくせえぇぴーぴーぴー"}
    ]
    }
   
   
  }
clickAction = () => {
  
  //getMsgValue
  var msgValue = document.getElementById("valueInput").value.trim()
  if(msgValue.length < 1){
    alert("what the hell")
  }
 
  //getNameValue
    const names = ['にゃんちゅう','くじら先輩','アデージョ','ぴょんす','電気頭']
    var random = Math.floor( Math.random() * names.length );
    var tmp = this.state.data
    var tmp2 = tmp.length
  console.log( names[random] );

  var newName = names[random];
  var newId = tmp2;
  var newMsg = msgValue;
  
  
  var arrayTest;
  


  this.setState({ data: this.state.data.concat({id:newId, name: newName, msg : newMsg}) })


  var tmp3 = this.state.data

  const content = this.state.data.map((item) =>
  <div key={this.state.data.id}>
    <h3>{this.state.data.name}</h3>
    <p>{this.state.data.msg}</p>
  </div>

  
);
 
}
 
 
  render() {
    var tmp3 = this.state.data;
    console.log(tmp3)
    //console.log(this.state.data)
     
    
    return (
      
      <div className="App">
        <header className="App-header">
        　<h1>おぺぺぺぺぺえええ</h1>
        </header>

        
      <div className = "App-body">

       
         
         <div id = "formBox">
              
              
             <input className = "inputBox" id = "valueInput" placeholder = 'whisper'></input>
           
             <Button bsStyle="default" onClick = {this.clickAction}>Info</Button>
         </div>
      <div className = "postList">
        <div className= "post">
          <div className = "name_compo">
            <span className="name">{this.state.data[0].name}</span>
          </div>
          <div className="data_compo">
            <span className="data">{this.state.data[0].msg}</span>
          </div>
        </div>
      </div>
      <div className = "postList">
        <div className= "post">
          <div className = "name_compo">
            <span className="name">{this.state.data[1].name}</span>
          </div>
          <div className="data_compo">
            <span className="data">{this.state.data[1].msg}</span>
          </div>
        </div>
      </div>
      
      <div className = "postList">
        <div className= "post">
          <div className = "name_compo">
            <span className="name">{this.state.data[2].name}</span>
          </div>
          <div className="data_compo">
            <span className="data">{this.state.data[2].msg}</span>
          </div>
        </div>
      </div>
      
      </div>
    　</div>
    );
  }
}

export default App;


{/* <code>NAME: </code><input id='name' onChange={this.handleNameValue} placeholder = 'insert ypur name here'/>
<br/>
<br/>
<code>WHISPER: </code><input id='msg' onChange={this.handleMsgValue} placeholder = 'tell me what you think'/>
<br/>
<br/>
<button onClick={this.test} >AppTestButton</button> */}

//   handleNameValue= (e) => {
//     this.setState({name: e.target.value});
//   }    
//  handleMsgValue= (e) => {
//    this.setState({msg: e.target.value});
//  }
//  test =(e) => {
//    var na = this.state.name;
//    var ms = this.state.msg;
//    var ex = this.state.exTest;
//    console.log(na);
//    console.log(ms);
//    console.log(ex);
//    var TMP = document.getElementById('msg').value
//    var mlTmp = this.state.msgList
//    mlTmp.push(TMP);
//    this.setState({msgList:mlTmp})
//    console.log(this.state.msgList);
   
//  }
  //this.setState({data:{id:4, name: "ggwe", msg : "しょんべんくせえssssぇぴーぴーぴー"}})
 // this.setState({ data: [...this.state.data, ...{id:4, name: "ggwe", msg : "しょんべんくせえssssぇぴーぴーぴー"} ] }) 
    
 
  // var tmp3 = this.state.data
  // var arrayTest;
  // tmp3.push({id:4, name: "ggwe", msg : "しょんべんくせえssssぇぴーぴーぴー"})

  // this.setState({data:arrayTest})

  // console.log(tmp3)
   