import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/listpost.css';

const BlogPostList = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [sort, setSort] = useState('');

    useEffect(() => {
        fetchPosts();
    }, [page, limit, sort]);

    const fetchPosts = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`, // Set the Authorization header with the token
                },
                params: { page, limit, sort },
            };
            const response = await axios.get('http://localhost:3000/listblogpost/', config);
            const postsData = response.data;
            setPosts(postsData);
        } catch (error) {
            console.error('Error retrieving posts:', error);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    return (
        <div className="container">
            <h2 className="title">Blogs</h2>
            <label className="sort-label"><span className="sort-label-text">Sort By:</span>

                <select className="sort-container" value={sort} onChange={handleSortChange}>
                    <option value="">None</option>
                    <option value="date">Date</option>
                    <option value="author">Author</option>

                </select>
            </label>
            {posts.map((post) => (
                <div className="post-container" key={post.id}>
                    <h3>{post.title}</h3>
                    <p className="content">{post.content}</p>
                    <p>Author: {post.author}</p>
                    <p>Date: {post.dateofcreation}</p>
                </div>
            ))}
            <div className="button-container">
                <button onClick={handlePreviousPage}>Previous Page</button>
                <button onClick={handleNextPage}>Next Page</button>
            </div>
        </div>
    );
};

export default BlogPostList;
