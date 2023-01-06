import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <header className="nav-header">
                <div className="nav-name">My Protfolio</div>
                <ul className="nav-ul">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skill</Link></li>
                    <li><Link to="/projects">My Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Nav;