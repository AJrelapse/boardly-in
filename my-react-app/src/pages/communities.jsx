import React from "react";
import Navbar from "../components/navbar";
import NavbarVertical from "../components/navbar_vertical";
import CommunityCard from "../components/communities_cards";


const Communities = () => {
    return(
        <div className="App">
            <div><Navbar/></div>
            <div><NavbarVertical/></div>
            <div><CommunityCard/><CommunityCard/><CommunityCard/></div>
        </div>
    )
};

export default Communities;