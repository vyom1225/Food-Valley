import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";

const AppLayout = () => (
        <>
            <Header/>
            <Body/>
        </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
