import newDatabase from './database.js';
import 'dotenv/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const isPersistent = true;
const database = newDatabase({ isPersistent });

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const saltRounds = 12;

    if (!username || !password) {
      return res.status(400).json({ message: 'Missing username or password' });
    }

    const existingUser = await database.getByUserName(username);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await database.create({ username, password: hashedPassword });

    return res.status(201).json({ id: user.id, username: user.username });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Missing username or password' });
    }

    const user = await database.getByUserName(username);
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    if (!process.env.SECRET_KEY) {
      return res.status(500).json({ message: 'Server misconfiguration' });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      algorithm: 'HS256',
      expiresIn: '1h',
    });

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getProfile = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Invalid or missing token' });
    }

    const token = authHeader.substring(7);
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const foundUser = await database.getById(decodedToken.id);

    if (!foundUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ username: foundUser.username });
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export const logout = (req, res) => {
  return res.status(204).end();
};