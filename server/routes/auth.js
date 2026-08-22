const express = require('express');
const bcrypt = require('bcryptjs');

const pool = require('../data/database');

const router = express.Router();

router.get('/login', function (req, res) {
  res.status(201).json({ message: '로그인 페이지 출력 완료!!' });
});

// router.post('/login');

// router.get('/signup', function (req, res) {
//   res.status(201).json({ message: '회원가입 페이지 출력 완료!!' });
// });

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

module.exports = router;
