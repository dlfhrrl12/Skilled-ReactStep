import React from 'react'

function BlogPost({ title, contents }) {
    return (
      <>
        <p>{title}</p>
        <p>{contents}</p>
      </>
    );
  }

export default BlogPost
