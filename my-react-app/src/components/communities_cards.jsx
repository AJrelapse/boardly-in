import React from "react";
import "../styles/communities_cards.css";

function CommunityCard() {
    return(
        <div><div class="community-card">
        <span class="title">Boardly Announcement</span>
        <p class="description">Get the latest future releases, milestones and crucial updates.</p>
        <div class="actions">
            <button class="join">
                Join
            </button>
        </div>
    </div></div>
    )
}

export default CommunityCard;