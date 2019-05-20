import React from 'react';
import PostsList from './PostsList';
import posts from './data/posts.json';

function App() {
  return (
    <PostsList posts={posts} />
  );
}

export default App;
