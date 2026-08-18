const express = require('express');

const pool = require('../data/database');

const router = express.Router();

router.get('/comment', async function (req, res) {});

router.post('/comment', async function (req, res) {
  if (req.body.text.trim().length === 0) {
    console.log('리뷰를 작성해주세요');
    return;
  }
  const [result] = await pool.query(
    'INSERT INTO comments(text, postid) VALUES(?,?)',
    [req.body.text, req.body.postid],
  );

  const [rows] = await pool.query('SELECT * FROM comments WHERE id=?', [
    result.insertId,
  ]);

  res.status(201).json(rows[0]);
});

module.exports = router;
