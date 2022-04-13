const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     // isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     // sales: {type: Number, default: 10},
//     year: { type: Number, default: 2021},
//     totalPages: Number,
//     stockAvailable: Boolean
// }, { timestamps: true });




const bookDataSchema = new mongoose.Schema(
    {
        name: String,
        author_id: Number,
        price: Number,
        rating: Number
    }, { timestamps: true}
)


module.exports = mongoose.model('bookData', bookDataSchema)
// module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
