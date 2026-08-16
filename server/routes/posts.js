const express = require('express');

const pool = require('../data/database');
const upload = require('../lib/multer');

const router = express.Router();

router.get('/', async function (req, res) {
  const [result] = await pool.query('SELECT * FROM posts');
  res.status(201).json(result);
});

router.get('/restaurant/:id', async function (req, res) {
  const id = req.params.id;
  const [result] = await pool.query('SELECT * FROM posts WHERE id=?', [+id]);
  res.status(201).json(result);
});

router.post(
  '/new-restaurant',
  upload.single('image'),
  async function (req, res) {
    const restaurant = req.body;
    const img = req.file;

    const [result] = await pool.query(
      'INSERT INTO posts(title, address, tel, description, businessHour, imagePath, userid) VALUES(?,?,?,?,?,?,?)',
      [
        restaurant.title,
        restaurant.address,
        restaurant.tel,
        restaurant.description,
        restaurant.businessHour,
        img.path,
        restaurant.userid,
      ],
    );
    const [rows] = await pool.query('SELECT * FROM posts WHERE id=?', [
      result.insertId,
    ]);
    res.status(201).json(rows[0]);
  },
);

module.exports = router;
