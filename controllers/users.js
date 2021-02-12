const User = require('../models/User');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({ success: true, msg: 'show all users', data: users })
  } catch(err) {
    next(err)
  }
}

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({ success: true, msg: 'show selected user', data: user })
  } catch(err) {
    next(err)
  }
};

const createUser = async (req, res, next) => {
  try {

    // insert user
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });

    // create token
    const token = user.getSignedJwtToken();

    res.json({ success: true, token })
  } catch(err) {
    next(err)
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send('Please provide an email and password')
      return;
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      res.status(401).send('Invalid credentials')
      return;
    }

    const doesPassMatch = await user.matchPassword(password);
    if (!doesPassMatch) {
      res.status(401).send('Invalid credentials')
      return;
    }

    const token = user.getSignedJwtToken();

    res.json({ success: true, token })

  } catch(err) {
    next(err)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    res.json({ success: true, msg: `user with id ${id} deleted`, data: user })
  } catch(err) {
    next(err) 
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;
    
    const user = await User.findByIdAndUpdate(id, { username, email }, { new: true });
    res.json({ success: true, msg: `user with id ${id} updated`, data: user })
  } catch(err) {
    next(err)
  }
};

const getMe = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.json({
    success: true,
    data: user
  });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
  getMe
}