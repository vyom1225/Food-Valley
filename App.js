import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div",{},[
React.createElement("ul",{key:"list1"},[
    React.createElement("li",{key:"1"},"Unordered list item -1"),
    React.createElement("li",{key:"2",
        style:{
            color:"pink",
            backgroundColor:"green",
        }},"Unordered list item -2")
]),
React.createElement("ol",{key:"list2"},[
    React.createElement("li",{key:"1"},"Ordered list item -1"),
    React.createElement("li",{key:"2"},"Ordered list item -2")
])
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);