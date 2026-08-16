const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const postsRoute = require('./routes/posts');
const commentsRoute = require('./routes/comments');

app.use(cors());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(postsRoute);
app.use(commentsRoute);

app.listen(3000);
