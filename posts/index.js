const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

//----------------------------------------------------------------------------
//Our posts "database" for this toy project
const posts = {};
//----------------------------------------------------------------------------

//----------------------------------------------------------------------------
//When sending a get requests to /posts respond with posts
app.get('/posts', (req, res) => {
  res.send(posts);
});
//----------------------------------------------------------------------------

//----------------------------------------------------------------------------
//When sending a post request to /posts create a new post
app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const title = req.body;
  posts[id] = { id, title };

  res.status(201).send(posts[id]);
});
//----------------------------------------------------------------------------

app.listen(4000, () => {
  console.log('Listening on 4000');
});
