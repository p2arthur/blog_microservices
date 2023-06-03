import PostCreate from '../src/components/PostCreate';
import PostList from './components/PostList';

export default function App() {
  return (
    <div className="container">
      <h1>Create a post</h1>
      <PostCreate />
      <hr />
      <h2>Posts</h2>
      <PostList />
    </div>
  );
}
