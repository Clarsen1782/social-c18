const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
} = require('/').get(getUsers).post(createUser);

router.route('/:userName').get(getSingleUser);

module.exports = router;