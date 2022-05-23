import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUser = async(req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'name', 'username']
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async(req, res) => {
  const { name, username, password, confPassword } = req.body;

  if(password !== confPassword) return res.status(400).json({msg: "Password & Confirm password are not the same"});

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await Users.create({
      name: name,
      username: username,
      password: hashPassword
    });
    res.json({msg: "Registration successful"});
  } catch (error) {
    console.log(error);
  }
};

export const Login = async(req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        username: req.body.username
      }
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);

    if(!match) return res.status(400).json({msg: "wrong password"});

    const userId = user[0].id;
    const name = user[0].name;
    const username = user[0].username;
    const accessToken = jwt.sign({userId, name, username}, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '20s'
    });
    const refreshToken = jwt.sign({userId, name, username}, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d'
    });

    await Users.update({refresh_token:refreshToken}, {
      where: {
        id: userId,
      }
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 3*24*60*60*1000
    });

    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({msg: "username not found"});
  }
};

export const Logout = async(req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken
    }
  });
  
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update({refresh_token: null}, {
    where: {
      id: userId
    }
  });

  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};