import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import './posts.css';



function LikeButton({ postId, likes, updateLikes }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
    setIsLiked(!!likedPosts[postId]);
  }, [postId]);

  const handleLikeClick = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/posts/${postId}/like`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isLiked: !isLiked }),
      });

      if (!response.ok) {
        throw new Error('Failed to update like.');
      }

      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
      if (isLiked) {
        delete likedPosts[postId];
      } else {
        likedPosts[postId] = true;
      }
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts));

      setIsLiked(!isLiked);
      updateLikes(postId, !isLiked ? likes + 1 : likes - 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="like-button" onClick={handleLikeClick}>
      {isLiked ? 'Unlike' : 'Like'} ({likes})
    </button>
  );
}


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

  const handleLikesUpdate = (postId, newLikes) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? { ...post, likes: newLikes } : post
      )
    );
  };

  const handleSortNewest = () => {
    setPosts((prevPosts) => [...prevPosts].sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
  };

  const handleSortOldest = () => {
    setPosts((prevPosts) => [...prevPosts].sort((a, b) => a.createdAt.localeCompare(b.createdAt)));
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
    <div align="center" className="create-post">
      <h1>Create a new post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input          type="text"
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
    <div className="post-container">
      <div className="sort-buttons">
        <button onClick={handleSortNewest}>Newest First</button>
        <button onClick={handleSortOldest}>Oldest First</button>
      </div>
      {posts.map((post) => (
        <div className="post-box" key={post._id}>
          <div className="post">
            <div className="post-header">
              <h2 className="post-title" style={{ textAlign: "left" }}>
                {post.title}
              </h2>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-footer">
              <LikeButton
                postId={post._id}
                likes={post.likes}
                updateLikes={handleLikesUpdate}
              />
              <p className="post-likes">{post.likes} Likes</p>
              <p className="post-timestamp">
                {new Date(post.createdAt).toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  timeZone: 'UTC'
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

