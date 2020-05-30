const JWT = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


const jwtToken = {
  createToken({ userID }) {
    return JWT.sign({
      iss: 'goodreads',
      sub: userID,
    },
      'goodreads',
      { expiresIn: '24h' }
    );
  },
  verifyToken(token) {
    const decoded = jwt.verify(token, 'goodreads', { expiresIn: '24h' });
    return decoded;
  }
};

const comparePassword = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = { comparePassword, jwtToken };