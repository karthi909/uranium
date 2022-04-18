const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema( {
    name:String,
    gender:{
            type:String,
            enum:["male","Female","Other"]
    },
    percentage:Number,
    batch:{
        type:ObjectId,
        ref:"batch"
    }

}, { timestamps: true });

module.exports = mongoose.model('developer', developerSchema)
