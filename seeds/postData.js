const { Post } = require('../models');

const postSeed = [
    {
        title: "Git Gud",
        post_text: "Why am I so bad at Elden Ring????"
    },
    {
        title: "I own NFTS",
        post_text: "and I'm vegan.  have I also told you I do Crossfit?"
    },
    {
        title: "First Post",
        post_text: "Did this work?"
    }
]

const seedPost = () => Post.bulkCreate(postSeed);

module.exports = seedPost;