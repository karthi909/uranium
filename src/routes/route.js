const express = require('express');
const router = express.Router();

const batchController = require('../controllers/batchController')
const developerController = require('../controllers/developerController');
const developerModel = require('../models/developerModel');

router.post('/batches', batchController.createBatch)
router.post('/developers', developerController.createDeveloper)

router.get('/scholarship-developer', developerController.eligible)

router.get('/getdeveloper', developerController.getdeveloper)
module.exports = router;