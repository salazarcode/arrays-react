import React from 'react';



class NumberList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
            <li key={number.toString()}>{number}</li>
        );
        return (
            <ul>{listItems}</ul>
        );        
    }

}

export default NumberList;