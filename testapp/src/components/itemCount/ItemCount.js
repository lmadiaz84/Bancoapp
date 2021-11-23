import { Component } from "react";
import Counter from "../counter/Counter";
import CounterDisplay from "../counterDisplay/CounterDisplay";

class ItemCount extends Component{
constructor(props){
    super(props);
    this.state={
        number: 0
    }
    this.increment= this.increment.bind(this);
    this.decrement= this.decrement.bind(this);
}
    increment(){
        if(this.state.number < '10' && this.state.number >= '0'){
            this.setState({number: this.state.number + 1})
        }  
    }
    decrement(){
        if(this.state.number <= '10' && this.state.number > '0'){
            this.setState({number: this.state.number - 1})
        }   
    }


    render(){
        return(
            <div>
                <CounterDisplay number={this.state.number}>
                </CounterDisplay>
                <Counter onIncrement={this.increment} onDecrement={this.decrement} />
            </div>
        )
    }
}

export default ItemCount; 