import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../css/Dashboard.css';

function Dashboard() {
    return (
        <div>
            <Helmet>
                <title>Blogging Dashboard</title>
            </Helmet>
            <script
                type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
            ></script>
            <div class="container">
                <div class="card">
                    <Link to="/addpost">
                        <img
                            src="https://cdn3.iconfinder.com/data/icons/basic-ui-31/16/07.Basic_UI_edit-compose-write-07-256.png"
                            alt="Write a Blog"
                        />
                    </Link>
                    <center>
                        <h2>
                            Create Blog
                        </h2>
                    </center>
                    <br />
                </div>
                <div class="card">
                    <Link to="/update">
                        <img
                            src="https://thumbs.dreamstime.com/b/update-sign-grunge-stamp-label-176843528.jpg"
                            alt="Update Blog"
                        />
                    </Link>
                    <center>

                        <h2>Update</h2>

                    </center>
                    <br />
                </div>
                <div class="card">
                    <Link to="/delete">
                        <img
                            src="https://i.pinimg.com/originals/6f/25/8d/6f258d0a7b6cb691901fa5f3a9182ad4.png"
                            alt="Delete Blog"
                        />
                    </Link>
                    <center>

                        <h2>Delete</h2>

                    </center>
                    <br />
                </div>
                <div class="card">
                    <Link to="/getbyid">
                        <img
                            src="https://images.vexels.com/media/users/3/145280/raw/db2a2d10b811de311534421689f3434b-basic-search-icon.jpg"
                            alt="Convertions"
                        />
                    </Link>
                    <center>

                        <h2>Search Blog</h2>

                    </center>
                    <br />
                </div>
                <div class="card">
                    <Link to="/listblogpost">
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/digital-marketing-tools-line/32/Chat-512.png"
                            alt="Blogs"
                        />
                    </Link>
                    <center>

                        <h2>Blogs</h2>

                    </center>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
