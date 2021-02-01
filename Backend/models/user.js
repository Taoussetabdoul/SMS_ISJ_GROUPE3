const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: 'Le nom d\'utilisateur ne peut pas être vide',
        unique: true
    },
    password: {
        type: String,
        required: 'Le mot de passe ne peut pas être vide',
        minlength: [8,'Le mot de passe doit contenir au minimum 8 caractères']
    },
    adresse: {
        type: String,
        required: 'L\'adresse ne peut pas être vide'
    },
    tel: {
        type: Number,
        required: 'Le numero de téléphone ne peut pas être vide'
    }
});

userSchema.path('adresse').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Adresse mail invalid ');


userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function(){
    
    return jwt.sign({
        _id: this._id,
        userName: this.userName,
    },
    'somesupersecretsecret',
    {expiresIn: '1h'}
    );
}


module.exports = mongoose.model('User',userSchema);

