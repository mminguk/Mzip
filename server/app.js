const express = require('express');
const cors = require('cors');

const app = express();

const postsRoute = require('./routes/posts');
const commentsRoute = require('./routes/comments');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(postsRoute);
app.use(commentsRoute);

app.listen(3000);
