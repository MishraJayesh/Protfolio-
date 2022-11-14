import React from 'react';
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

            <div className="project-container">
                <h1>My Projects</h1>

                <div className="card">
                    <img className="card-img-top" src={todo} alt="Card cap" />
                    <div className="card-body">
                        <a href="https://github.com/MishraJayesh/PRACTICE/tree/main/REDUX/todolist"><h5 className="card-title">Todo List</h5></a>
                        <p className="card-text">
                            This App Uses Redux.js
                            & React.js, JavaScript, HTML And CSS.
                        </p>
                    </div>
                    {/* <div className="card-footer"> </div> */}
                </div>

                <div className="card">
                    <img className="card-img-top" src={blog_app} alt="Card cap" />
                    <div className="card-body">
                        <a href="https://github.com/MishraJayesh/REACT-JS-PROJECT/tree/main/simplefrom"><h5 className="card-title">Blog App</h5></a>
                        <p className="card-text">
                            This Is Only A Responsive UI For SignUp Page Of Blog App.
                            This Application Uses React.js, JavaScript, HTML And CSS.
                        </p>
                    </div>
                    {/* <div className="card-footer"> </div> */}
                </div>

                <div className="card">
                    <img className="card-img-top" src={book_dic} alt="Card cap" />
                    <div className="card-body">
                        <a href="https://github.com/MishraJayesh/MERN_BOOK_DIRECTORY"><h5 className="card-title">Book Directory</h5></a>
                        <p className="card-text">
                            This Is Only A Responsive UI Of Book Directory Application.
                            This Application Uses React.js, Node.js, JavaScript, HMTL And CSS.
                            Whereas API Integrations Are Yet To Be Done To Complete This Application.
                            APIs Are Created In Node.js .
                        </p>
                    </div>
                    {/* <div className="card-footer"> </div> */}
                </div>

                <div className="card">
                    <img className="card-img-top" src={insta_clone} alt="Card cap" />
                    <div className="card-body">
                        <a href="##"><h5 className="card-title">Instagram-Clone</h5></a>
                        <p className="card-text">
                            This Is Only A Responsive UI Of Instagram Clone Application.
                            This Was An Team Project, In Which I Lead The Frontend
                            By Creating A Responsive UI For Application.
                        </p>
                    </div>
                    {/* <div className="card-footer"> </div> */}
                </div>

                <div className="card">
                    <img className="card-img-top" src={protfolio} alt="Card cap" />
                    <div className="card-body">
                        <a href="https://github.com/MishraJayesh/Protfolio-Application/tree/main/protfolio"><h5 className="card-title">Protfolio</h5></a>
                        <p className="card-text">
                            This Is A Complete React.js Project.
                            This Application Uses React.js, JavaScript And CSS.
                            This Complete Project Is Made By Me(References From YouTube).
                        </p>
                    </div>
                    {/* <div className="card-footer"> </div> */}
                </div>

                <div className="card">
                    <img className="card-img-top" src={e_comm_db} alt="Card cap" />
                    <div className="card-body">
                        <a href="https://github.com/MishraJayesh/e_commerce_dashboard_mern_stack"><h5 className="card-title">E-Commerce DashBoard</h5></a>
                        <p className="card-text">
                            This Is A Complete MERN STACK Project.
                            This Complete Project Is Made By Me(References From YouTube).
                        </p>
                    </div>
                    {/* <div className="card-footer"> </div> */}
                </div>
            </div>

        </div>
    )
}

export default Projects;