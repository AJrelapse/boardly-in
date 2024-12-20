import React from "react";
import Navbar from "../components/navbar";
import NavbarVertical from "../components/navbar_vertical";
import Graph from "../components/graph";

const Dashboard = () => {
    return(
        <div className="App">
            <div><Navbar/></div>
            <div><NavbarVertical/></div>
            <div><Graph/></div>
        </div>
    )
};

export default Dashboard;