const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [

        ],
        include: [
            {
                model: Comment,
                attributes: [

                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts =dbPostData.map(post => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;