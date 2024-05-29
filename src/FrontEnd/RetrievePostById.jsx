import React, { useState } from 'react';
import axios from 'axios';
import '../css/GetPost.css';

const RetrievePostById = () => {
    const [postid, setPostId] = useState('');
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');

    const handleRetrievePost = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/read/${postid}`);
            const postData = response.data;
            if (Array.isArray(postData) && postData.length > 0) {
                setPost(postData);
                setError('');
            } else {
                setPost([]);
                setError('Post Not found');
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setPost([]);
                setError('Post not found');
            } else {
                console.error(error);
                setPost([]);
                setError('Failed to retrieve post');
            }
        }

    };

    return (
        <>
            <br /><br />
            <div className="retrieve-post-container">
                <h2>Fetch Post</h2>
                <input
                    className="retrieve-post-input"
                    type="text"
                    placeholder='Enter Post ID'
                    value={postid}
                    onChange={(e) => setPostId(e.target.value)}

                />
                <button className="retrieve-post-button" onClick={handleRetrievePost}>
                    Retrieve Post
                </button>
                {/* {error && <p className="retrieve-post-error">{error}</p>} */}
                {error && <p>{error}</p>}

            </div>
            <br /><br />
            <div className="table-container">
                {post && post.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>PostId</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Author</th>
                                <th>Date/Time</th>

                            </tr>
                        </thead>
                        <tbody>
                            {post.map((newpost) => (
                                <tr key={newpost.postid}>
                                    <td>{newpost.postid}</td>
                                    <td>{newpost.title}</td>
                                    <td>{newpost.content}</td>
                                    <td>{newpost.author}</td>
                                    <td>{newpost.dateofcreation}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p></p>
                )}
            </div>
        </>
    );
};

export default RetrievePostById;
