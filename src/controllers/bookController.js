const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {

    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
    let a= 2+4
    a= a + 10
    console.log(a)
    let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
    console.log(allBooks)
    let b = 14
    b= b+ 10
    console.log(b)
    res.send({msg: allBooks})
}

const bookList = async function (req, res) {
    let allBooks =await BookModel.find()
    res.send({msg: allBooks})
}

const getBooksInYear = async function (req, res) {
    let allBooks = await BookModel.find({year: 2004})
    res.send({msg: allBooks})
    
}

const getXINRBooks = async function (req, res) {
    let allBooks = await BookModel.find({'prices.indianPrice':{$in:["100INR", "200INR", "500INR"]}})
    res.send({msg: allBooks})   
}

const RandomBooks = async function (req, res) {
    let allBooks = await BookModel.find({$or:[{stockAvailable: true}, {totalPages:{$gt:500} }]})
    res.send({msg: allBooks})
    
}

const KK= async function (req, res) {
    let key=req.body;
    let allbooks=await BookModel.find(key).select({_id:0,_v:0,createdAt:0,updatedAt:0});
    res.send({msg: allbooks.length, msg: allbooks});
    
}

// --------------------------------------------------------------------------------------------------------------------------------------//

const createBookData = async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
    
}

const createAuthorData = async function (req, res) {
    let data= req.body
    let savedData = await authorModel.create(data)
    res.send({msg: savedData})
    
}

const allBooks = async function (req, res) {
    const authorDetails = await authorModel.find({author_name:"Chetan Bhagat"})
    const Id = authorDetails[0].author_id
    const booksName = await bookModel.find({author_id: Id}).select({name: 1})
    res.send({msg:booksName})
    
}

const updatedBookPrice = async function (req, res) {
    const bookDetails = await bookModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorN = await authorModel.find({author_id: id}).select({author_name:1, id:0})

    const bokname = bookDetails[0].name
    const updatePrice = await bookModel.findOneAndUpdate({name:bokname}, {price:100}, {new:true}).select({price:1, _id:0})

    res.send({msg:authorN, updatePrice})
    
}

const autorsName = async function (req, res) {
    const booksId = await bookModel.find({price:{$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map(inp => inp.author_id)

    let temp=[]
    for (let i = 0; i < id.length; i++) {
        let a = id[i]
        const author = await authorModel.find({author_id:a}).select({author_name:1, _id:0})
        temp.push(author)    
    }

    const  authorName = temp.flat()
     res.send({msg: authorName })
    
}


module.exports.createBookData= createBookData

module.exports.createAuthorData= createAuthorData

module.exports.allBooks= allBooks
module.exports.updatedBookPrice= updatedBookPrice
module.exports.autorsName=autorsName
//---------------------------------------------------------------------------------------------------------------------------------------------------//
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getXINRBooks = getXINRBooks
module.exports.RandomBooks = RandomBooks
module.exports.KK= KK