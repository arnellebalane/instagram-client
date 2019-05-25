import React, { useState } from 'react';

function emptyPost() {
  return {
    caption: '',
    media_url: '',
    author_id: ''
  };
}

function PostForm() {
  const [post, setPost] = useState(emptyPost());

  const handleFieldChange = (event) => {
    const {name, value} = event.target;
    setPost({...post, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(post);

    setPost(emptyPost());
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Post</h3>

      <label>Caption</label>
      <textarea name="caption" value={post.caption} onChange={handleFieldChange} required></textarea>

      <label>Media URL</label>
      <input type="text" name="media_url" value={post.media_url} onChange={handleFieldChange} required />

      <label>Author ID</label>
      <input type="text" name="author_id" value={post.author_id} onChange={handleFieldChange} required />

      <button>Create Post</button>
    </form>
  );
}

export default PostForm;
