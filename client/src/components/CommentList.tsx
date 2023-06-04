import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface comment {
  content: string;
}

export default function CommentList(postId: string) {
  const [postComments, setPostComments] = useState<Object>({});

  const fetchComments = async () => {
    const response = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    const posts = Object.values(response.data);

    setPostComments(posts);
  };

  useEffect(() => {
    fetchComments();
  }, []);
  const renderedComments = Object.values(postComments);
  console.log('comments', renderedComments);

  return (
    <div>
      <ul>
        {renderedComments.map((comment) => (
          <li>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
}
