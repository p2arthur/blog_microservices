const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const posts = {};

app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    console.log('posts from comments', posts);
    const { id, content, postId } = data;

    const post = posts[postId];
    console.log('post:', post);
    post.comments.push({ id, content });
  }

  console.log('posts', posts);

  res.sendStatus(201);
});

app.listen(4002, console.log('Listening on port 4002'));
