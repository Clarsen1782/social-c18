const thoughtRouter = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addTag,
  removeTag,
} = require('../../controllers/thoughtController');


thoughtRouter.route('/').get(getThoughts).post(createThought);


thoughtRouter
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


thoughtRouter.route('/:thoughtId/tags').post(addTag);

thoughtRouter.route('/:thoughtId/tags/:tagId').delete(removeTag);

module.exports = thoughtRouter;
