import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import './posts.css';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post.');
      }

      const newPost = await response.json();
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/posts');

        if (!response.ok) {
          throw new Error('Failed to fetch posts.');
        }

        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='post'>
     
      <div align="center" className="create-post">
        <h1>Create a new post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {error && <p>{error}</p>}
      </div>
      
      <div align="center" className="recent-posts">
        <h1>Recent Posts</h1>
        <div>
          {posts.map((post) => (
            <div key={post._id} className="post-box">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}
