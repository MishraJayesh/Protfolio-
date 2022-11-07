import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/SideBar.css';

const sideBar = () => {
    return (
        <div>
            <div onclick="openNav()" className="hamberger">
                <i class="fa-solid fa-bars"></i>
            </div>
            <ul className="sideBar-ul">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">My Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default sideBar;