const express=require('express');

const contactsController=require('../Controllers/ContactController');

router = express.Router();

router.get('/contactList/:idUser',contactsController.listContacts);
router.post('/saveContact', contactsController.saveContact);
router.post('/upload/:idUser',contactsController.contactsUpload);


module.exports=router; 