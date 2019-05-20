import React from 'react';
import PostItem from './PostItem';

function PostsList({posts}) {
  return (
    <ol>
      {posts.map(post =>
        <PostItem key={post.id} data={post} />
      )}
    </ol>
  );
}

export default PostsList;
