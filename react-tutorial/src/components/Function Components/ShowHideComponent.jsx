import React,{useState} from "react";

export default function ShowHideomponent(){

    const [value,setValue]=useState(true);

    function show(){
        setValue(true);
    }

    function hide(){
        setValue(false);
    }

    return(
        <>
        <h1>Hide Show Component</h1>
        {
            value? <h1>I am a Programmer</h1> : null
        }

        <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>show()}>Show</button>
        <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>hide()}>Hide</button>
        </>
    )
}