const express=require('express');

const contactsController=require('../Controllers/ContactController');

router = express.Router();

router.get('/contact/:idUser',contactsController.listContacts);
router.post('/api/contact', contactsController.saveContact);
router.post('/upload/:idUser',contactsController.contactsUpload);


module.exports=router; 