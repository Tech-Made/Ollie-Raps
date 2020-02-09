const express = require('express');
const router = express.Router();

router.post('/login', async (req,res) => {
    console.log('req.body:', req.body);
    if (
        req.body.username === process.env.USERNAME &&
        req.body.password === process.env.PASSWORD
    ) {
        return res.status(200).send();
    }
});

// router.post('/join', async (req,  res) => {
//     const user = new User(req.body);
//     await user.save();
//     res.status(200);
//     res.end();
// });

module.exports = router;