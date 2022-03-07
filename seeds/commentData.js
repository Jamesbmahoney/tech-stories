const { Comment } = require('../models');

const commentSeed = [
    {
        text: "I died at the character creation screen",
        post_id: 1
    },
    {
        text: "Are you listening to yourself right now?",
        post_id: 2
    },
    {
       text: "Lookin good dude!",
       post_id: 3
    }
]

const seedComment = () => Comment.bulkCreate(commentSeed);

module.exports = seedComment;