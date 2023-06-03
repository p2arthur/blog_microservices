import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function PostList() {
  const [postList, setPostList] = useState<Object>({});

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts');
    const posts = response.data;
    setPostList(posts);
    console.log(postList);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const postsRenderer = () => {
    postList.map((post) => <div>{post.title}</div>);
  };

  return (
    <div>
      Post list <button onClick={fetchPosts}>Fetch posts</button>
    </div>
  );
}
