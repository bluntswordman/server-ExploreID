const { User } = require('../models/');
const bcrypt = require('bcrypt');
const cuid = require('cuid');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
  const { username, name, password, confirmPassword } = req.body;

  if (!username || !name || !password || !confirmPassword) {
    return res.status(400).json({ msg: 'Silakan isi semua kolom' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Passwords & confirm password tidak sama' });
  }

  const id = cuid();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const trueUsername = await User.findOne({
      where: {
        username: username
      }
    })

    const trueName = await User.findOne({
      where: {
        name: name
      }
    })

    if (trueUsername) return res.status(400).json({ msg: 'Username sudah ada' });

    if (trueName) return res.status(400).json({ msg: 'Nama sudah ada' });

    await User.create({
      id: id,
      username: username,
      name: name,
      password: hashedPassword,
    });

    res.status(201).json({ msg: 'Berhasil membuat akun'});
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).json({ msg: 'Silakan isi semua kolom' });

  try {
    const user = await User.findOne({
      where: {
        username: username,
      },
    });

    if (!user) return res.status(400).json({ msg: 'Username tidak ditemukan' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: 'Password Salah' });

    const accessToken = jwt.sign({ 
      id: user.id,
      username: user.username,
      name: user.name
    }, process.env.ACCESS_TOKEN, { expiresIn: '30s' });
    const refreshToken = jwt.sign({
      id: user.id,
      username: user.username,
      name: user.name
    }, process.env.REFRESH_TOKEN, { expiresIn: '1d' });

    await User.update({refresh_token: refreshToken}, {
        where: {
          id: user.id,
        },
      },
    );

    res.cookie('refresh_Token', refreshToken, {
      httpOnly: true,
      maxAge: 24*60*60*1000
    });

    res.json({ accessToken });
  }
  catch (error) {
    res.status(400).json({ 
      error: error.message,
      msg: 'Incorrect username or password'
    });
  }
};

const getUserbyId = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({
      where: {
        id: id,
      },
      attributes: [
        'id', 'username', 'name', 'createdAt', 'updatedAt'
      ],
    });

    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    res.json(user);
  }
  catch (error) {
    res.status(404).json({msg: "username not found"});
  }
};

const logOut = async (req, res) => {
  const refreshToken = req.cookies.refresh_Token;

  if(!refreshToken) return res.status(400).json({ msg: 'No refresh token' });

  const user = await User.findOne({
    where: {
      refresh_token: refreshToken,
    },
  });

  if (!user) return res.status(400).json({ msg: 'User does not exist' });
  
  await User.update({refresh_token: null}, {
    where: {
      id: user.id,
    },
  });

  res.clearCookie('refresh_Token');

  return res.status(200).json({ msg: 'Logged out' });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, name } = req.body;

  try {
    const user = await User.findOne({
      where: {
        id: id,
      },
    });
    
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    await User.update({
      username: username || user.username,
      name: name || user.name,
    }, {
      where: {
        id: id,
      },
    });

    res.json({ msg: 'User updated' });
  }
  catch (error) {
    res.status(400).json({ msg: 'User does not exist' });
  }
};

module.exports = {
  userRegister,
  userLogin,
  getUserbyId,
  logOut,
  updateUser,
};