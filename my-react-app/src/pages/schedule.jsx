import React from "react";
import Navbar from "../components/navbar";
import NavbarVertical from "../components/navbar_vertical";
import ScheduleCard from "../components/schedule_cards";

const Schedule = () => {
    return(
        <div className="App">
            <div><Navbar/></div>
            <div><NavbarVertical/></div>
            <div><ScheduleCard/></div>
        </div>
    )
};

export default Schedule;