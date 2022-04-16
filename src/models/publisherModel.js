const mongoose = require('mongoose');
const { modelName } = require('./authorModel');
const ObjectId = mongoose.Schema.Types.ObjectId

const publisherSchema = new mongoose.Schema ({
    name:String,
    headQuarter:String
}, {timestamps: true});

module.exports = mongoose.model('newPublisher', publisherSchema)