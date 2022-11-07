import React from 'react';
import {html, css, js, mongo, express, react, node} from '../Asset/skills';
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
                    <div><img src={html} alt="html-5" /></div>
                    <div><img src={css} alt="css-3" /></div>
                    <div><img src={js} alt="js" /></div>
                    <div><img src={mongo} alt="mongo" /></div>
                    <div><img src={express} alt="express" /></div>
                    <div><img src={react} alt="react" /></div>
                    <div><img src={node} alt="node" /></div>
                </div>

            </div>
        </div >
    )
}

export default Skills;