const router = require('express').Router();
const {
    getAllThoughts,
    getOneThoughtById,
    createThought,
    updateThought,
    deleteThought,
    postReaction,
    deleteReaction,
} = require('../../controllers/thoughtsController');

//api/thoughts to see all thoughts and create new thought
router.route('/').get(getAllThoughts).post(createThought);


//api for specific thought. Also update and delete and single thought
router.route('/:thoughtId').get(getOneThoughtById).put(updateThought).delete(deleteThought);

//To post a reaction to a thought
router.route('/:thoughtId/reactions').post(postReaction);

//To delete a reaction by it's ID
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;