import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import PostForm from './PostForm';
import PostsList from './PostsList';

export const GET_POSTS = gql`
  query {
    posts {
      id
      caption
      like_count
      comments_count
      media_url
      author {
        name
        username
      }
    }
  }
`;

function App() {
  return (
    <div>
      <Query query={GET_POSTS}>
        {({loading, data}) => {
          if (loading) return <p>Fetching posts...</p>;
          if (data.posts.length === 0) return <p>No posts found.</p>;
          return <PostsList posts={data.posts} />;
        }}
      </Query>

      <PostForm />
    </div>
  );
}

export default App;
