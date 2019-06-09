import React from "react";
import "./nav.scss";

function Nav(props) {
    return (
        <nav className="navbar">
            <h2>Finish Him</h2>
            <h2>{`${props.primaryHeadingText} ${props.primaryHeadingValue}`}</h2>
            <h2>{`${props.SecondaryHeadingText} ${props.SecondaryHeadingValue}`}</h2>

        </nav>
    )
}
export default Nav;