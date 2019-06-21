import React from 'react';
import logo from './logo.svg';
import './App.css';

class MiComponente extends React.Component {
    constructor(props) {
      super(props);
      this.InnerHandlerChange = this.InnerHandlerChange.bind(this);
    }

    InnerHandlerChange(e) {
        this.props.onChange(e.target.value);
    }

    render(){
        return (
            <div>
                <input
                    type="text"
                    value={this.props.temp}
                    onChange={this.InnerHandlerChange}
                />
            </div>
        );        
    }

}

export default MiComponente;
