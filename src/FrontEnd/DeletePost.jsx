import React, { useState } from 'react';
import axios from 'axios';
import '../css/DeletePost.css'

const DeletePost = () => {
  const [postid, setPostId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleDeletePost = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Set the Authorization header with the token
        },
      };
      const response = await axios.delete(`http://localhost:3001/deletepost/${postid}`, config);

      if (response.status === 200) {
        setMessage('Post deleted successfully!');
        setError('');
      } else {
        setMessage('');
        setError('Failed to delete post');
      }
    } catch (error) {

      console.error(error);
      setMessage('');
      setError('Failed to delete post');
    }
  };

  return (<><br /><br />
    <div className="delete-post-container">
      <h2>Delete Post</h2>
      <form>
        <div className="form-group">
          <label>Post ID:</label>
          <input
            type="text"
            value={postid}
            onChange={(e) => setPostId(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleDeletePost}>Delete</button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  </>
  );
};

export default DeletePost;
