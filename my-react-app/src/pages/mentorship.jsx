import React from "react";
import Navbar from "../components/navbar";
import NavbarVertical from "../components/navbar_vertical";
import SearchBar from "../components/searchbar";

const Mentorship = () => {
    return(
        <div className="App">
            <div><Navbar/></div>
            <div><NavbarVertical/></div>
            <div><h1>Choose Mentor</h1></div>
            <div><SearchBar/></div>

        </div>
    )
};

export default Mentorship;