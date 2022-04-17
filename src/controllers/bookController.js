const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require('../models/publisherModel')

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

const createBook = async function (req, res) {
    let book = req.body
    if (book.author) {
        let authorDts = await authorModel.findOne({_id: book.author});
        if(authorDts == null){
            res.send('Author Id is absent or inValid');
        } else if(book.publisher){
            let publisherDts = await publisherModel.findOne({_id: book.publisher});
            if(publisherDts==null){
                res.send('Publisher Id is absent or inValid')
            } else{
                let newData = await bookModel.create(book);
                res.send({msg: newData});
            }

        } else {
            res.send('please enter publisher');
        }
        
    } else {
        res.send('please Enter Author')
        
    }
    
   
}


const getBookDts = async function (req, res) {
    let data = await bookModel.find().populate(['author','publisher']);
    res.send({msg:data})
    
}

const books = async function (req, res) {
    let books = await bookModel.updateMany({publisher:{$in:["62596edc92b3f951aa07ef72","625af79f288586844ec71633"]}},{$set:{isHardCover : true}});

    let authors = await authorModel.find({ratings: {$gt: 3.5}},{_id:1});
    let result=[];
    for (let i = 0; i < authors.length; i++) {
        result[i]= await bookModel.updateMany({author: authors[i]._id}, {$inc: {price: 10}});

        
    }
    res.send({msg: result, books});
    
}

module.exports.getBookDts=getBookDts

module.exports.createBook = createBook

module.exports.books= books
