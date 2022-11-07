import React from 'react';
// import { Link } from 'react-router-dom';
import '../styling/SideBar.css';

const SideBar = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"/>
            <div onclick="openNav()" className="hamberger">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className="sidenav">
            <a href="javascript:void(0)" onclick="closeNav()"></a>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Project</a>
            <a href="/contact">Contact</a>
            </div>
            {/* <ul className="sideBar-ul">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">My Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul> */}
        </div>
    )
}

export default SideBar;