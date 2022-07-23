const { Thoughts, User } = require('../models');

module.exports = {
    getAllThoughts(req, res) {
        Thoughts.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getOneThoughtById(req, res) {

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