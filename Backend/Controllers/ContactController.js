//require multer for the file uploads
const multer = require('multer');
// set the directory for the uploads to the uploaded to
const DIR = './uploads/';

const csvParser = require('csv-parser');
const fs = require('fs');
const Contact = require('../models/contact.js');


//list contacts function
exports.listContacts = (req, res, next) => {
    Contact.find({ _idUser: req.params.idUser })
      .then(contacts => res.status(200).json(contacts))
      .catch(error => res.status(400).json({ error }));
}


//save contact function
exports.saveContact = (req, res, next) => {
    delete req.body._id;
    const contact = new Contact({
      ...req.body
    });
    contact.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
}


//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
//var upload = multer({dest: DIR}).single('photo');
const fileStorage=multer.diskStorage({
  destination:(reg,file,cb)=>{
    cb(null,DIR);
  },
  filename:(reg,file,cb)=>{
    cb(null,'contactList.csv');
  }
})

var upload = multer({storage:fileStorage}).single('contact');

//our file upload function.
exports.contactsUpload = (req, res, next)=>{

     var importedContactsList = [];
     var success = [];
     var failure = [];
     var sendBool = 0;

     upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
       // No error occured.
        path = req.file.path;
        
        console.log("in upload");



        fs.createReadStream('./uploads/contactList.csv')
        .pipe(csvParser())
        .on('data', (row) => {

            console.log("IN ON DATA");
            importedContactsList.push(row);


        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            console.log('\n\nimportedContactsList',importedContactsList);


            for(i=0;i<importedContactsList.length;i++){
                                  //*
                //console.log(row['nomUtilisateur'],success['prenom'],row['adresse']);
                console.log("In for",importedContactsList.length);
                const contact = new Contact({
                  name: importedContactsList[i].name,
                  phoneNumber: importedContactsList[i].phoneNumber,
                  _idUser: req.params.idUser,
              });
              //*/
              //*
              console.log("In for ContactS",contact);
              contact.save()
              .then(result => {
                success.push(contact);
                
              })
              .catch(err => {
                  var importedContact = contact.toObject();
                  console.log("\n\nError in storing hours in db",err);
                  if(err.code == 11000){
                    console.log("\n\nError in creating new Contact massImportBis in IF");
                    importedContact.errorMsg = "Utilisateur déjà enregistré"
                    console.log("Imported contact error msg",importedContact.errorMsg);
                    failure.push(importedContact);
                    console.log('Failure',failure)
                  }else{
                    console.log("\n\nError in creating new contact massImportBis");
                    if(err.name === 'ValidationError'){
                      console.log("In app.js val massImport err's IF")
                      var valErrors = [];
                      Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
                      //console.log('VAL ERRORS',valErrors);
                      importedContact.errorMsg = valErrors
                      failure.push(importedContact);
                    }
                  }
              })
              .finally(()=>{
                sendBool++;
                console.log('OUUUUUUT');
                if(sendBool==importedContactsList.length){
                  res.status(201).json({success,failure});
                }   

              })  
            }
        })

  }); 

}

