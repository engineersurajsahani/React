import React from "react";

export default function Home(props){
    return(
        <>
        <h1>Home Component</h1>
        <h1>{props.title}</h1>
        </>
    )
}