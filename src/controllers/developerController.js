// const authorModel = require("../models/authorModel")
// const bookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

// const batchModel = require('../models/batchModel');
const batchModel = require('../models/batchModel');
const developerModel = require('../models/developerModel');


const createDeveloper = async function (req, res){
    let developer = req.body
    let developerCreated = await developerModel.create(developer)

    res.send({data: developerCreated})
}

const eligible = async function (req, res) {
    let eleigibleCndt = await developerModel.find({gender:"Female", percentage:{$gte: 70}}).populate(['batch']);
    res.send({msg: eleigibleCndt})
}
const getdeveloper = async function(req, res){
    let batchId = await batchModel.findOne({name: req.query.program},{_id:1});
    let developer = await developerModel.find({percentage:{$gte:req.query.percentage}}).populate('batch');
    res.send({msg: developer});
}


module.exports.getdeveloper = getdeveloper
module.exports.eligible =eligible
module.exports.createDeveloper = createDeveloper