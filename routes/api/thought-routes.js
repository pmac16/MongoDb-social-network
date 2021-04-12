const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
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
    

router
    .route('/:userId')
    .post(addThought)
   
// /api/thoughts/<thoughtId>
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);


// /api/comments/<userId>/<thoughtId>
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeThought);



router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction)

module.exports = router;