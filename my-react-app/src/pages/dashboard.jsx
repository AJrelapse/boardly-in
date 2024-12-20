import React from "react";
import Navbar from "../components/navbar";
import NavbarVertical from "../components/navbar_vertical";
import ProgressChart from "../components/graph";
import "../styles/dashboard.css"

const Dashboard = () => {
    return(
        <div className="App">
            <div><Navbar/></div>
            <div><NavbarVertical/></div>
            <div className="graph"><ProgressChart/></div>
        </div>
    )
};

export default Dashboard;