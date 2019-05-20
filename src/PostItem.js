import React from 'react';

function PostItem({data}) {
  return (
    <li>
      {data.caption}
    </li>
  );
}

export default PostItem;
