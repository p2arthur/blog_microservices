const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());
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
app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const title = req.body.title;
  posts[id] = { id, title };

  await axios.post('http://localhost:4005/events', {
    type: 'PostCreated',
    data: { id, title },
  });
  res.status(201).send(posts[id]);
});
//----------------------------------------------------------------------------

//----------------------------------------------------------------------------
//Request handler to take care of events coming from the event bus

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send(201, 'Request received');
});

//----------------------------------------------------------------------------

app.listen(4000, () => {
  console.log('Listening on 4000');
});
