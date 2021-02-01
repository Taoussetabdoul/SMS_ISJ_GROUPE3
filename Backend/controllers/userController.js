const passport = require('passport');


exports.authenticate = (req,res,next) => {

    passport.authenticate('local', (err,user,info) => {
        console.log('IN AUTHENTICATE',info,req.body)

        if(err){
            console.log('IN AUTHENTICATE 1')
            return res.status(400).json(err);
        }else if(user){
            console.log('IN AUTHENTICATE 2')
            return res.status(200).json({"token": user.generateJwt()});
        }else {
            console.log('IN AUTHENTICATE 3')
            if((req.body.userName=='')||(req.body.password==''))
            {
                return res.status(404).json({message: 'Identifient(s) manquant(s)'});
            }else{
                return res.status(404).json(info);
            }
            
        }
    })(req,res);
}




