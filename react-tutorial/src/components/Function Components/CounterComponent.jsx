import React,{useState} from "react";

export  default function CounterComponent(){

    const [count,setCount]=useState(0);

    function increaseCounter(){
        setCount(count+1);
    }

    function decreaseCounter(){
        setCount(count-1);
    }

    function resetCounter(){
        setCount(0);
    }

    return(
        <>
        <h1>Counter Component</h1>
        <h3>Counter :- {count} </h3>
        <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>increaseCounter()}>Increase Counter</button>
        <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>decreaseCounter()}>Decrease Counter</button>
        <button className='bg-indigo-500 rounded-lg m-5 p-5' onClick={()=>resetCounter()}>Reset Counter</button>
        </>
    )
}