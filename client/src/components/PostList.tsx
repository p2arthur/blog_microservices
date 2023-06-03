import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function PostList() {
  const [postList, setPostList] = useState<string[]>([]);

  const fetchPosts = async () => {
    const posts = (await axios.get('http://localhost:4000/posts')) as string[];
    setPostList(posts);
    console.log(postList);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      Post list <button onClick={fetchPosts}>Fetch posts</button>
    </div>
  );
}
