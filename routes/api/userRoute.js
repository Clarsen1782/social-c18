const express = require('express');
const userRouter = express.Router();

const userController = require('../../controllers/userController');

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
} = userController;

userRouter.route('/')
    .get(getUsers)
    .post(createUser);

userRouter.route('/:userName')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

module.exports = userRouter;
