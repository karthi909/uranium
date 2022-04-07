const express = require('express');
const logger = require('./logger')

const router = express.Router();



router.get('/candidates', function (req, res) {

    let candidates = ['A','B','C','D','E','F','G','H','I','J'];
    // console.log(candidates);
    
    // console.log(req)

//    console.log(req.candidates); 
    
    // console.log('------------------')
    
    // console.log('------------------')
    
    res.send(candidates)

});




module.exports = router;
// adding this comment for no reason