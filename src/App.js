import React from 'react';
import { connect } from 'react-redux';
import store from './store/store'

function mapStateToProps(state){
  return {
    state: state
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      users: this.props.state.users,
      token: this.props.state.token
    }
  }

  async handleClick(){    
    let nuevo = {
      nombre: document.getElementById("txt_nombre").value,
      apellido: document.getElementById("txt_apellido").value
    };
    await this.props.dispatch({
      type: "ADD_USER",
      payload: {
        user: nuevo
      }
    });
    this.setState({users: this.props.state.users})
  }

  render(){
    const listItems = this.state.users.map((persona, index) =>
      <li key={index}>{persona.nombre + " " + persona.apellido}</li>
    ); 
    return (
      <div style={{display: "flex", flexDirection:"column", padding:"10%"}}>             
        <ul>
          {listItems}
        </ul>
        <input type="text" id="txt_nombre"/>
        <input type="text" id="txt_apellido"/>
        <button onClick={this.handleClick}>Agregar</button>
        <p>{this.props.state.token}</p>
        <input 
          type="text" 
          id="txt_token" 
          value={this.props.state.token}
          onChange={async (e)=>
            {       
              await this.props.dispatch({
                type:"SET_TOKEN",
                payload: {
                  token: e.target.value
                }
              });
              this.setState({token:this.props.state.token});
            }
          }
        />
      </div>    
    );    
  }

}

export default connect(mapStateToProps)(App);
