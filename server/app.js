const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');

const app = express();

const postsRoute = require('./routes/posts');
const commentsRoute = require('./routes/comments');
const authRoute = require('./routes/auth');

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: 'Mzip-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

app.use(postsRoute);
app.use(commentsRoute);
app.use(authRoute);

app.listen(3000);
