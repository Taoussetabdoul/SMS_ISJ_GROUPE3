const express=require('express');

const userController=require('../controllers/userController');
const jwtVerifier = require('../config/jwtVerifier')

router = express.Router();

router.post('/login',userController.authenticate);

module.exports=router;