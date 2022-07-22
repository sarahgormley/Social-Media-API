const { Schema, Types } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],

    },
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'

    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User'

    },
}, {
    toJSON: {
        getters: true,
    },
    id: false,
})

userSchema.virtual('friendsList').get(function() {
    return this.friends.length;
});


module.exports = userSchema;