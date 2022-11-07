import React from 'react';
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
        </div>
    )
}

export default SideBar;