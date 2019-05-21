import React from 'react';
import PostForm from './PostForm';
import PostsList from './PostsList';
import posts from './data/posts.json';

function App() {
  return (
    <div>
      <PostsList posts={posts} />
      <PostForm />
    </div>
  );
}

export default App;
