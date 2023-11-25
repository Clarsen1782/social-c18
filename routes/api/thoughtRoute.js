const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addTag,
    removeTag,
} = require('../../controllers/thoughtController');


router.route('/').get(getThoughts).post(createThought);


router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


router.route('/:thoughtId/tags').post(addTag);

router.route('/:thoughtId/tags/:tagId').delete(removeTag);

module.exports = router;