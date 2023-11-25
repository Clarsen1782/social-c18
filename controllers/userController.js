const { User } = require('../models/User');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId })
            .select('-__v');

        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });

        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }

        await Application.deleteMany({ _id: { $in: user.applications } });
        res.json({ message: 'User and associated apps deleted!' })
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId }, 
      { $set: req.body }, 
      { new: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'No user with that ID' });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
};
