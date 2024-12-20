import React from "react";
import "../styles/searchbar.css";

function SearchBar() {
    return(
        <div class="InputContainer">
        <input placeholder="Search.." id="input" class="input" name="text" type="text" />
        </div>
    )
}

export default SearchBar;