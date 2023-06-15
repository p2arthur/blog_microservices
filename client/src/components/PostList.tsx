import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

interface postInterface {
  id: string;
  title: string;
  comments: string[];
}

export default function PostList() {
  const [postList, setPostList] = useState<object>({});

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4002/posts');
    const posts = response.data;
    setPostList(posts);
    console.log(postList);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const renderedPosts: postInterface[] = Object.values(postList);
  console.log('renderedPosts:', renderedPosts);

  const postsToRender = renderedPosts.map((post) => (
    <div
      className="card"
      key={post.id}
      style={{ width: '30%', marginBottom: '20px' }}
    >
      <div className="card-body" key={post.id}>
        <h3>{post.title}</h3>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
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
