const router = require('express').Router();
const {
    getAllUsers,
    getOneUserById,
    createNewUser,
    updateUser,
    deleteUser,
    addUserFriend,
    deleteUserFriend,
} = require('../../controllers/userController');

//api/ to see all users and create new user
router.route('/').get(getAllUsers).post(createNewUser);

//api for specific users. Also update and delete a single user
router.route('/:userId').get(getOneUserById).put(updateUser).delete(deleteUser);

//To add or remove a specific friend
router.route('/:userId/friends/:friendId').post(addUserFriend).delete(deleteUserFriend);


module.exports = router;