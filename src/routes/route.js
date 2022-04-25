const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController = require('../controllers/weatherController')

const memController = require('../controllers/memController')



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/getSessionByDistrict", CowinController.getSessionsByDistrict)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/getWeatherOfCity", weatherController.getWeather)
router.get("/getCitysWeather", weatherController.getCitysWeatherSorted)

router.get("/getMeme", memController.getMeme  )
router.get("/createMeme", memController.createMeme)

module.exports = router;