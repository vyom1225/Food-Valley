import React from "react";
import ReactDOM from "react-dom/client";

const Heading = ()=>{
    return(
    <h1>Hello World from jsx</h1>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
