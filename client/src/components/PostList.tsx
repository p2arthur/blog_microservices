import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

interface post {
  id: string;
  title: { title: string };
}

export default function PostList() {
  const [postList, setPostList] = useState<object>({});

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts');
    const posts = response.data;
    setPostList(posts);
    console.log(postList);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const renderedPosts: post[] = Object.values(postList);
  console.log(renderedPosts);

  const postsToRender = renderedPosts.map((post) => (
    <div
      className="card"
      key={post.id}
      style={{ width: '30%', marginBottom: '20px' }}
    >
      <div className="card-body">
        <h3>{post.title.title}</h3>
      </div>
      <CommentCreate postId={post.id} />
      <CommentList postId={post.id} />
    </div>
  ));

  console.log(postsToRender);

  return (
    <div>
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {postsToRender}
      </div>
    </div>
  );
}
