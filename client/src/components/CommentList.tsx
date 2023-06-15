import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface propsInterface {
  comments: commentInterface[];
}
interface commentInterface {
  id: string;
  content: string;
}

export default function CommentList({ comments }: propsInterface) {
  const [postComments, setPostComments] =
    useState<commentInterface[]>(comments);

  const fetchComments = async () => {
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
