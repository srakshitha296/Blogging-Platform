import React, { useState } from 'react';
import axios from 'axios';
import '../css/AddPostPage.css';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    //const token = localStorage.getItem('token');
    const newPost = {
      title,
      content,
      author,
    };
    axios
      .post('http://localhost:3001/add', newPost)
      .then((response) => {
        setMessage('Data inserted successfully!');
        // Reset form fields if needed
        setTitle('');
        setContent('');
        setAuthor('');
      })
      .catch((error) => {
        setMessage('Failed to insert data.');
      });

  };


  return (
    <div className="containerof">
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default AddPost;
