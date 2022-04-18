// const AuthorModel= require("../models/authorModel")

// const createAuthor= async function (req, res) {
//     let author = req.body
//     let authorCreated = await AuthorModel.create(author)
//     res.send({data: authorCreated})
// }

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

// module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData

const batchModel = require('../models/batchModel')

const createBatch = async function (req, res) {
    let batch = req.body
    let batchCreated = await batchModel.create(batch)
    
    res.send({data: batchCreated})
}

module.exports.createBatch= createBatch