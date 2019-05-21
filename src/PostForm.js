import React, { useState } from 'react';

function PostForm() {
  const [post, setPost] = useState({});

  const handleFieldChange = (event) => {
    const {name, value} = event.target;
    setPost({...post, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(post);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Post</h3>

      <label>Caption</label>
      <textarea name="caption" onChange={handleFieldChange} required></textarea>

      <label>Media URL</label>
      <input type="text" name="media_url" onChange={handleFieldChange} required />

      <label>Permalink</label>
      <input type="text" name="permalink" onChange={handleFieldChange} required />

      <label>Author ID</label>
      <input type="text" name="author_id" onChange={handleFieldChange} required />

      <button>Create Post</button>
    </form>
  );
}

export default PostForm;
