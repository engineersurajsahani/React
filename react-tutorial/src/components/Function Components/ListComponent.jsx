import React from "react";

export default function ListComponent(){

    const employeeList=[
        {
            id:1,
            name:"Suraj Sahani",
            role:"UI Developer",
            department:"Development"
        },
        {
            id:2,
            name:"Amit Sahani",
            role:"Web Developer",
            department:"Development"
        },
        {
            id:3,
            name:"Rakesh Sahani",
            role:"Backend Developer",
            department:"Development"
        },
        {
            id:4,
            name:"Dinesh Sahani",
            role:"Frontend Developer",
            department:"Development"
        },
        {
            id:5,
            name:"Umesh Sahani",
            role:"UI Developer",
            department:"Development"
        }
    ]

    return(
        <>
        {
            employeeList?
            employeeList.map((e)=>
            <h1>{e.id}, {e.name}, {e.role} and {e.department}</h1>
            ): <h1>No Data</h1>
        }
        </>
    )
}