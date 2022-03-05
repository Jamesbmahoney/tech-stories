const { Comment } = require('../models');

const commentSeed = [
    {
        comment_text: "I am a HUMAN from the Planet Zognoid.  I understand your pain, fellow HUMAN.",
        post_id: 1
    },
    {
        comment_text: "Modern day pyramid schemes.",
        post_id: 2
    },
    {
       comment_text: "I died in the character creation screen.",
       post_id: 3
    }
]

const seedComment = () => Comment.bulkCreate(commentSeed);

module.exports = seedComment;