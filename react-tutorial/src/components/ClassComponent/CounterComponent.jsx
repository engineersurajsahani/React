import React from 'react';

export default class CounterComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    increaseCounter(){
        this.setState({
            count:this.state.count+1
        })
    }

    decreaseCounter(){
        this.setState({
            count:this.state.count-1
        })
    }

    resetCounter(){
        this.setState({
            count:0
        })
    }

    render(){
        
        return(
            <>
            <h1>Counter Component</h1>
            <h3>Counter :- {this.state.count} </h3>
            <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>this.increaseCounter()}>Increase Counter</button>
            <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>this.decreaseCounter()}>Decrease Counter</button>
            <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>this.resetCounter()}>Reset Counter</button>
            </>
        )
    }
}