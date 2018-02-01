import React, { Component } from 'react';
import final from './final.svg';
import './App.css';
import Purchase from './purchase.js';

class App extends Component {
  render() {

    var online = [
      { name: "Complete FrontEnd course", price: 400},
      { name: "Complete HTML and CSS course", price: 200},
      { name: "Complete Material-UI course", price: 280},
      { name: "Complete BackEnd course", price: 350},
      { name: "Complete FullStack Web Dev course", price: 750}
    ];

    return (
      <div className="sky">
        <header className="cross">
          <img src={final} className= "create" alt="logo" />
          <h1 className="heading">Welcome to Course Sales App in ReactJS</h1>
        </header>
        <Purchase sendit= {online}/>
      </div>
    );
  }
}

export default App;
