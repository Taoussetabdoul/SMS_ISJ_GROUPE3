const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use(
    new localStrategy({usernameField: 'adresse'},
    (emailAdresse,password,done) => {
        console.log('I AM IN PASSPORT!',emailAdresse,password);
        
        User.findOne({adresse: emailAdresse},
         (err,user) => {
            console.log("IN PASSPORT FINDONE")
             if(err){
                 console.log("IN PASSPORT ERR")
                return done(err); 
             }else if(!user){
                return done(null,false,{message: 'Utilisateur non enregistré'});
             }else if(!user.verifyPassword(password)){
                return done(null,false,{message: 'Mot de passe incorrect'});
             }else{
                console.log('USER',user);
                return done(null, user);
            }

        })

    })

);