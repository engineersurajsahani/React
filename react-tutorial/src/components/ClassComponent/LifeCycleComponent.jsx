import React from "react";

export default class LifeCycleComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log("Constructor Called...");
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

    componentDidMount(){
        console.log("ComponentDidMount called!!!");
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate called!!!");
    }

    render(){
        console.log("Render Called...");
        return(
            <>
            <h1>LifeCycle Component</h1>
            <h3>Counter :- {this.state.count} </h3>
            <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>this.increaseCounter()}>Increase Counter</button>
            <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>this.decreaseCounter()}>Decrease Counter</button>
            <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>this.resetCounter()}>Reset Counter</button>
            </>
        )
    }
}