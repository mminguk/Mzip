const express = require('express');
const bcrypt = require('bcryptjs');

const pool = require('../data/database');

const router = express.Router();

router.post('/login', async function (req, res) {
  const enteredId = req.body.userid;
  const enteredPassword = req.body.password;

  const [user] = await pool.query(`SELECT * FROM users WHERE userid=?`, [
    enteredId,
  ]);

  if (!user[0]) {
    return res.status(500).json({ message: '존재하지 않는 유저입니다.' });
  }

  const comparePassword = await bcrypt.compare(
    enteredPassword,
    user[0].password,
  );

  if (!comparePassword) {
    return res.status(500).json({ message: '비밀번호가 일치하지 않습니다!' });
  }
  
  res.status(200).cookie('userid', user[0].title, {
    maxAge: 900000,
    httpOnly: true
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

router.get('/logout', function (req, res, next) {
  req.session.destroy((error) => {
    if (error) {
      return next(error);
    }
    res.clearCookie('connect.sid');

    res.redirect('/');
  });
});

module.exports = router;
