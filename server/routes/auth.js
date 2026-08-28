const express = require('express');
const bcrypt = require('bcryptjs');

const pool = require('../data/database');

const router = express.Router();

router.get('/auth', function (req, res) {
  if (!req.session.user) {
    return res.status(401).json({
      message: '로그인되어 있지 않습니다.',
    });
  }

  res.json({
    user: req.session.user,
  });
});

router.post('/login', async function (req, res) {
  const enteredId = req.body.userid;
  const enteredPassword = req.body.password;

  const [user] = await pool.query(`SELECT * FROM users WHERE userid=?`, [
    enteredId,
  ]);

  if (user[0]) {
    return res.status(500).json({ message: '존재하지 않는 유저입니다.' });
  }

  const comparePassword = await bcrypt.compare(
    enteredPassword,
    user[0].password,
  );

  if (!comparePassword) {
    return res.status(500).json({ message: '비밀번호가 일치하지 않습니다!' });
  }
  req.session.user = {
    id: user[0].userid,
    email: user[0].email,
  };
  res.status(200).json({
    message: '로그인 성공!!',
    user: req.session.user,
  });
});

router.post('/signup', async function (req, res) {
  const email = req.body.email;
  const userId = req.body.userid;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  const [existUser] = await pool.query(
    `SELECT * FROM users WHERE email = ? and userid=?`,
    [email, userId],
  );

  if (existUser.length > 0) {
    return res.status(500).json({ message: '이미 존재하는 유저입니다.' });
  }

  if (password !== confirmPassword) {
    return res.status(500).json({ message: '비밀번호가 일치하지 않습니다!' });
  }

  const encryptPassword = await bcrypt.hash(password, 10);
  const [result] = await pool.query(
    `INSERT INTO users(userid, email, password) VALUES(?,?,?)`,
    [userId, email, encryptPassword],
  );
  const [rows] = await pool.query(`SELECT * FROM users WHERE id=?`, [
    result.insertId,
  ]);
  res.status(201).json(rows[0]);
});

router.post('/logout', function (req, res, next) {
  req.session.destroy((error) => {
    if (error) {
      return next(error);
    }
    res.clearCookie('connect.sid');

    res.redirect('/');
  });
});

module.exports = router;
