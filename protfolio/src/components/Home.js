import React from 'react';
import self from '../Asset/self.jpg';
import '../styling/Home.css';

const Home = () => {
    return (
        <div>
            <div id="home" className="home-cont">
                <div className="details">
                    <h1>Hello, I Am Jayesh Vinod Mishra </h1>
                    <p>Full Stack Developer</p>
                    <p></p>

                    <div className="project-btn">
                        <a href="##" download=""><button>Resume</button></a>
                    </div>

                    <div className="social">
                        <a href="https://github.com/MishraJayesh">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></a>
                        <a href="https://www.linkedin.com/in/jayesh-mishra-27771b165/">
                            <img src="https://p.kindpng.com/picc/s/32-326233_linkedin-thompson-electric-company-linkedin-logo-bw-png.png" alt="linkedin" /></a>

                    </div>
                </div>

                <div className="profile-img">

                    <div>
                        <img src={self} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;