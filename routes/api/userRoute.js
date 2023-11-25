const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController');

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
} = userController;

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:userName')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

module.exports = router;
