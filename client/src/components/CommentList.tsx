import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface propsInterface {
  postId: string;
}
interface commentInterface {
  id: string;
  content: string;
}

export default function CommentList({ postId }: propsInterface) {
  const [postComments, setPostComments] = useState<commentInterface[]>([]);

  const fetchComments = async () => {
    const response = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setPostComments(response.data);

    console.log('postComments:', postComments);
  };

  useEffect(() => {
    fetchComments();
  }, []);
  const renderedComments = postComments.map((comment: commentInterface) => (
    <li key={comment.id}>{comment.content}</li>
  ));

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
}
