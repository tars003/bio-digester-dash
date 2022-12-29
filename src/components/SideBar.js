import React from "react";

import "../styles/sidebar.css";

const SideBar = (props) => {

    return (
        <>

            <div className="sidenav">
                <a href="/dash">All Units</a>
                {/* <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" id="search-tab">Search</a> */}
            </div>

        </>
    )
}

export default SideBar;