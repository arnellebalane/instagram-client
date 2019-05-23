import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const ADD_POST = gql`
  mutation ($caption: String!, $media_url: String!, $permalink: String!, $author_id: ID!) {
    addPost(
      caption: $caption,
      media_url: $media_url,
      permalink: $permalink,
      author_id: $author_id
    ) {
      id
      caption
      like_count
      comments_count
      media_url
      author {
        name
        handle
      }
    }
  }
`;

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

  return (
    <Mutation mutation={ADD_POST}>
      {(addPost, result) => {
        const handleSubmit = (event) => {
          event.preventDefault();
          addPost({
            variables: post
          });

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
      }}
    </Mutation>
  );
}

export default PostForm;
