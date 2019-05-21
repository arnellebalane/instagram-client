import React from 'react';

function PostItem({data}) {
  return (
    <li>
      <article>
        <img src={data.media_url} alt={data.caption} />

        <main>
          <header>
            <h4>{data.author.name}</h4>
            <h5>{data.author.handle}</h5>
          </header>

          <pre><p>{data.caption}</p></pre>
        </main>

        <footer>
          <data>Likes: {data.like_count}</data>
          <data>Comments: {data.comments_count}</data>
        </footer>
      </article>
    </li>
  );
}

export default PostItem;
