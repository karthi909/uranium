const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb+srv://KA909_1:karthi123@cluster0.qpomb.mongodb.net/KA909_1",{
    useNewUrlParser: true
})
.then(()=> console.log('mongoDb is connected'))
.catch(err => console.log(err))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
