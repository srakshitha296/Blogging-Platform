import React, { useState } from 'react';
import axios from 'axios';
import '../css/UpdatePost.css'; // Assuming you have an UpdatePost.css file for styling

const UpdatePost = () => {
    const [postid, setPostId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleUpdatePost = async () => {
        try {
            const updatedPost = { title, content, author };
            const token = localStorage.getItem('token');

            const response = await axios.put(`http://localhost:3000/updatepost/${postid}`, updatedPost, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the request headers
                }
            });
            if (response.status === 200) {
                setMessage('Post updated successfully!');
                setError('');
            } else {
                setMessage('');
                setError('Failed to update post');
            }
        } catch (error) {
            console.error(error);
            setMessage('');
            setError('Failed to update post');
        }
    };

    return (<><br /><br />
        <div className="update-post-container">
            <h2>Update Post</h2>
            <form>
                <div className="form-group">
                    <label>Post ID:</label>
                    <input type="text" value={postid} onChange={(e) => setPostId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <button type="button" onClick={handleUpdatePost}>Update Post</button>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    </>
    );
};

export default UpdatePost;
