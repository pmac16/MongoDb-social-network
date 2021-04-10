const router = require('express').Router();
const { 
    getAllThoughts,
    addThought, 
    updateThought,
    removeThought,
    addReaction,
    removeReaction 
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought)
   
// /api/thoughts/<thoughtId>
router.route('/:thoughtId')
    // .get()
    .put(updateThought)
    // .delete(deleteThought);


// /api/comments/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
   
    .put(addReaction)

    .delete(removeThought);



router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction)

module.exports = router;