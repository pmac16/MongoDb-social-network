const { Thought, User, Reaction } = require("../models");

const thoughtController = {
  //get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .sort({ createdAt: -1 }) //descending order
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  
  //get single thought
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .then((dbUserData) => {
    
        //if no thought is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: "No thought found with that id." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //add thought to a user
  addThought({params, body}, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with that id." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  //add reaction
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $addToSet: { reactions: body } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with that id." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  //update a thought
  updateThought({ params, body }, res) {
   Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(400).json({ message: "No user found with that id." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  //remove thought
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
    //   .then((deletedThought) => {
    //     if (!deletedThought) {
    //       return res
    //         .status(404)
    //         .json({ message: "No user found with that id." });
    //     }
    //     return User.findOneAndUpdate(
    //       { _id: params.userId },
    //       { $pull: { thoughts: params.thoughtId } },
    //       { new: true }
    //     );
    //   })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No thought found with this id." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  //remove reaction
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
