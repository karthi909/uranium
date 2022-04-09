const express = require('express');

const router = express.Router();

 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": ["swimming"]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": ["soccer" ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": ["soccer"],
       },
    ]




router.post('/players', function (req, res) {

   let x = req.body
    let f = 0;

   for (let i = 0; i < players.length; i++) {
       
    if(players[i].name == x.name){
        f = 1;
        break;
    
    }
   }
    if( f==0){
        players.push(x)
        res.send({ data: players , status: true })
    } else{
        res.send('Name already Exist')
    }
     

});







module.exports = router;

// adding this comment for no reason