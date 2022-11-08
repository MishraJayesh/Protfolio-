import React from 'react';
import counter_app from '../Asset/counter_app.png';
import todo from '../Asset/todo.png';
import blog_app from '../Asset/blog_app.png';
import book_dic from '../Asset/book_dic.png';
import insta_clone from '../Asset/insta_clone.png';
import e_comm_db from '../Asset/e_comm_db.png';
import protfolio from '../Asset/protfolio.png';
import '../styling/Projects.css';

const Projects = () => {
    return (
        <div className="project">

            <h1>My Projects</h1>

            <div className="card">
                <img className="card-img-top" src={counter_app} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Counter App</h5>
                    <p className="card-text">
                        This App Uses Redux.js
                        & React.js
                    </p>
                </div>
                {/* <div className="card-footer"> </div> */}
            </div>

            <div className="card">
                <img className="card-img-top" src={todo} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Todo List</h5>
                    <p className="card-text">
                        This App Uses Redux.js
                        & React.js
                    </p>
                </div>
                {/* <div className="card-footer"> </div> */}
            </div>

            <div className="card">
                <img className="card-img-top" src={blog_app} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Blog App</h5>
                    <p className="card-text">
                        This Is Only A Responsive UI For SignUp Page Of Blog App.
                        This Application Uses React.js
                    </p>
                </div>
                {/* <div className="card-footer"> </div> */}
            </div>

            <div className="card">
                <img className="card-img-top" src={book_dic} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Book Directory</h5>
                    <p className="card-text">
                        This Is Only A Responsive UI Of Book Directory Application.
                        This Application Uses React.js
                        Whereas API Integrations Are Pending In Completion Of Application.
                        APIs Are Made By Node.js.
                    </p>
                </div>
                {/* <div className="card-footer"> </div> */}
            </div>

            <div className="card">
                <img className="card-img-top" src={insta_clone} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Instagram-Clone</h5>
                    <p className="card-text">
                        This Is Only A Responsive UI Of Instagram Clone Application.
                        This Was An Team Project, In Which Lead The Frontend
                        By Creating A Responsive UI For Application.
                    </p>
                </div>
                {/* <div className="card-footer"> </div> */}
            </div>

            <div className="card">
                <img className="card-img-top" src={protfolio} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">Protfolio</h5>
                    <p className="card-text">
                        This Is A Complete React.js Project.
                        This Complete Project Is Made By Me By Taking References From YouTube.
                    </p>
                </div>
                {/* <div className="card-footer"> </div> */}
            </div>

            <div className="card">
                <img className="card-img-top" src={e_comm_db} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">E-Commerce DashBoard</h5>
                    <p className="card-text">
                        This Is A Complete MERN STACK Project.
                        Frontend, Backend And Database All Are Well Created.
                        All APIs Are Created By Me And Also Integrated.
                        This Complete Project Is Made By Me By Taking References From YouTube.
                    </p>
                </div>
                {/* <div className="card-footer"> </div> */}
            </div>

        </div>
    )
}

export default Projects;