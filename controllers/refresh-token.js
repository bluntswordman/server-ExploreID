const { User } = require('../models');
const jwt = require('jsonwebtoken');

const refreshToken = async (req, res) => {
  try {
    const getRefreshToken = req.cookies.refresh_Token;
    
    if (!getRefreshToken) return res.status(400).json({ msg: 'No refresh token provided' });

    const user = await User.findOne({
      where: {
        refresh_token: getRefreshToken,
      },
    });

    if (!user) return res.status(400).json({ msg: 'Invalid refresh token' });

    jwt.verify(getRefreshToken, process.env.REFRESH_TOKEN, (err, decoded) => {
      if (err) return res.status(400).json({ msg: 'Invalid refresh token' });

      const userId = user.id;
      const name = user.name;
      const username = user.username;
      const accessToken = jwt.sign({ userId, name, username }, process.env.ACCESS_TOKEN, { expiresIn: '30s' });

      res.json({ accessToken });
    });
  } catch (error) {
    res.status(400).json({ msg: error.message, error });
  }
};

module.exports = refreshToken;