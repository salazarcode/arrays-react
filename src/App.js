import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyInput from './MiComponente'
import NumberList from './List'

class App extends React.Component {
  constructor(props){
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperatura : 45,
      nombres:[
        "Andrés",
        "Adrián",
        "Adriana"
      ],
      NumberList:[1, 2, 3, 4, 5]
    }
  }

  onButtonClick(e){
    this.state.NumberList.push(56);
  }

  handleChange(temp){    
    this.setState({temperatura: temp})
  }

  render(){
    const listItems = this.state.NumberList.map((number) =>
      <li key={number.toString()}>{number}</li>
    ); 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.onButtonClick}>Acción</button>
          <MyInput temp={this.state.temperatura} onChange={this.handleChange} />
          <ul>{
            this.state.NumberList.map((item)=><li key={item.toString()}>{item}</li>)
          }</ul>
        </header>
      </div>
    );    
  }

}

export default App;
