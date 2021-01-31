const mongoose = require ('mongoose');

const contactSchema = mongoose.Schema({
    name : String,
    phoneNumber : Number,
    _idUser : Number
});

module.exports = mongoose.model('Contact', contactSchema);
