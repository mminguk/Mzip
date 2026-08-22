const express = require('express');
const bcrypt = require('bcryptjs');

const pool = require('../data/database');

const router = express.Router();

router.get('/login', function (req, res) {
  res.status(201).json({ message: '로그인 페이지 출력 완료!!' });
});

router.post('/login');

router.get('/signup', function (req, res) {
  res.status(201).json({ message: '회원가입 페이지 출력 완료!!' });
});

router.post('/signup', async function (req, res, next) {
  const email = req.body.email;
  const userId = req.body.userid;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  const [existUser] = await pool.query(
    `SELECT * FROM users WHERE email = ? and userid = ?`,
    [email, userId],
  );
  console.log(existUser);

  //   if (password !== confirmPassword) {
  //     return next();
  //   }
  //   const encryptedPassword = await bcrypt.hash(password);
  //   const [result] = await pool.query(
  //     `INSERT INTO users(email, userid, password) VALUES(?,?,?)`,
  //     [email, userId, encryptedPassword],
  //   );

  //   const rows = await pool.query(`SELECT * FROM users WHERE id = ?`, [
  //     result.insertId,
  //   ]);

  //   res.status(201).json(rows[0]);
});

module.exports = router;
