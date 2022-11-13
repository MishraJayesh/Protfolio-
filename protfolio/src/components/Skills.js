import React from 'react';
import html from '../Asset/html.png';
import css from '../Asset/css.png';
import js from '../Asset/js.png';
import mongo from '../Asset/mongo.png';
import express from '../Asset/express.png';
import react from '../Asset/react.png';
import node from '../Asset/node.png';
import '../styling/Skills.css';

const Skills = () => {
    return (
        <div>
            <div className="tech-skills">
                <h1>My<span>Technical Skills</span></h1>

                <div className="skills-btn">
                    <button onclick="Allskill()">All</button>
                </div>

                <div className="all-skills">
                    <div><img src={html} alt="html-5" /><p>HTML</p></div>
                    <div><img src={css} alt="css-3" /><p>CSS</p></div>
                    <div><img src={js} alt="js" /><p>JavaScript</p></div>
                    <div><img src={mongo} alt="mongo" /><p>MONGO DB</p></div>
                    <div><img src={express} alt="express" /><p>EXPRESS</p></div>
                    <div><img src={react} alt="react" /><p>REACT</p></div>
                    <div><img src={node} alt="node" /><p>NODE</p></div>
                </div>

            </div>
        </div >
    )
}

export default Skills;