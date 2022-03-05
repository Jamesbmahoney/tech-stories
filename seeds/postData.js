const { Post } = require('../models');

const postSeed = [
    {
        title: "Howdy Pardner!",
        content: "Just moved to the big city and BOY HOWDY I'm a stereotypical cowboy!"
    },
    {
        title: "NFTs are the future",
        content: "I'm also vegan.  And have I told you I do crossfit?"
    },
    {
        title: "Stuck in Elden Ring",
        content: "I can't even get out of the tutorial area without being killed"
    }
]

const seedPost = () => Post.bulkCreate(postSeed);

module.exports = seedPost;