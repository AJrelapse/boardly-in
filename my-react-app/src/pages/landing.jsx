import React from "react";
import NavbarLanding from "../components/navbar_landing";
import Login from "../components/login";


const Landing = () => {
    return (
        <div className="App">
            <div><NavbarLanding/></div>
            <div><Login/></div><div/>
        </div>
        
    )
}

export default Landing;