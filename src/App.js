import React from 'react';
import PostsList from './PostsList';
import posts from './data/posts.json';

function App() {
  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
