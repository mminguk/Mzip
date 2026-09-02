const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ message: '토큰이 없습니다.' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: '유효하지 않거나 만료된 토큰입니다.' });
    }
    req.user = user; // 검증된 사용자 정보를 req에 저장
    next();
  });
};

module.exports = verifyToken;
