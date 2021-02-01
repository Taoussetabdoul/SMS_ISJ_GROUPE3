const express=require('express');

const contactsController=require('../Controllers/ContactController');

router = express.Router();

router.get('/contact',contactsController.listContacts);
router.post('/api/contact', contactsController.saveContact);
router.post('/upload',contactsController.contactsUpload);


module.exports=router; 