const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/ussers
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

//set up PUT and DELETE at /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post(createFriend)
  .delete(deleteFriend);

module.exports = router;