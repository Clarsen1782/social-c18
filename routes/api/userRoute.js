const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
} = require('../../controllers/userController').get(getUsers).post(createUser);

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:userName')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

module.exports = router;