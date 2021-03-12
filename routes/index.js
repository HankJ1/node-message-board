const express = require('express');
const router = express.Router();

const messages = [
    {
        text: "A flute with no holes is not a flute",
        user: "The San Philosopher Basho",
        add: new Date()
    },
    {
        text: "A donut with no holes, is a danish",
        user: "Ty Web",
        add: new Date()
    }
]

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Mini Messageboard', messages: messages});
})

router.post('/new', (req, res, next) => {
    console.log('ive been triggered');
    let msgObj = {
        user: req.body.author,
        text: req.body.text,
        add: new Date()
    }

    messages.push(msgObj);
    res.redirect('/');
    next()
})

module.exports = router;