const { Thoughts, User } = require('../models');

module.exports = {
    getAllThoughts(req, res) {
        Thoughts.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getOneThoughtById(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought ?
                res.status(404).json({ message: 'No thought found!' }) :
                res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {

    },
    updateThought(req, res) {

    },
    deleteThought(req, res) {

    },
    postReaction(req, res) {

    },
    deleteReaction(req, res) {

    },
}