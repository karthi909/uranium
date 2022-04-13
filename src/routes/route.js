const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController");
const AuthorModel = require('../models/authorModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.get("/bookList", BookController.bookList)
// router.get("/getBooksInYear", BookController.getBooksInYear)
// router.get("/getXINRBooks", BookController.getXINRBooks)
// router.get("/RandomBooks", BookController.RandomBooks)
// router.get("/KK", BookController.KK)

//-----------------------------------------------------------------//

router.post("/createBookData", BookController.createBookData)
router.post("/createAuthorData", BookController.createAuthorData)
router.get("/allBooks", BookController.allBooks)
router.get("/updatedBookPrice", BookController.updatedBookPrice)
router.get("/autorsName", BookController.autorsName)

module.exports = router;