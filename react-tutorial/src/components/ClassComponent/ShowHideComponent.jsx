import React from "react";

export default class ShowHideComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:true
        }
    }

    show(){
        this.setState(
            {
                value:true
            }
        )
    }

    hide(){
        this.setState(
            {
                value:false
            }
        )
    }
    render(){
        return(
            <>
            <h1>Hide Show Component</h1>
            {
                this.state.value? <h1>I am a Programmer</h1> : null
            }

            <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>this.show()}>Show</button>
            <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>this.hide()}>Hide</button>
            </>
        )
    }
}