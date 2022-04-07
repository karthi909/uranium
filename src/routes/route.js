const express = require('express');


const router = express.Router();



router.get('/movies', function (req, res) {

    let a = ['rang de basnasti', 'the shining', 'lord of the rings', 'batman begins'];

    res.send( a )

    

});



router.get('/movies/:indexNumber', function (req, res){
    
   let a = ['rang de basnasti', 'the shining', 'lord of the rings', 'batman begins'];
   let listt = a.length;

   const index = req.params.indexNumber;

   if ( index > listt) {

        res.send('Please check the number you have enterd')
       
   } else {

        res.send(`The movie is ${a[index]}`)
       
   }
});


router.get('/films', function (req, res){

    let movieObject = [

        {
            "id":1,
            "name":"rand de basanti"

        },
        {
            "id":2,
            "name":"the shining"
        },
        {
            "id":3,
            "name":"lord of the rings"
        },
        {
            "id":4,
            "name":"bat man begins"
        }

    ]

    res.send(movieObject)

});



module.exports = router;4

// adding this comment for no reason