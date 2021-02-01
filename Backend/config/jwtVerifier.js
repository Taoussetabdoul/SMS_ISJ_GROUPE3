const jwt = require('jsonwebtoken');

exports.verifyJwtToken = (req,res,next) => {
    var token;
    console.log("\nIn verifyJwtToken")
    if('authorization' in req.headers){
        console.log("authorization is in header");
        token = req.headers['authorization'].split(' ')[1];
        console.log(token);
    }
    if(!token){
        console.log("\nIn verifyJwtToken No Token Present");
        return res.status(403).send({auth: false, message: 'No token provided'});
    }else{
        console.log("token is there");
        jwt.verify(token, 'somesupersecretsecret',
            (err,decode) => {
                if(err){
                    console.log("token verification failed");
                    return res.status(500).send({auth: false, message: 'Token authentification failed'});
                }else{
                    req._id = decode._id;
                    console.log("token verification successful");
                    next();
                }
            }
        )
        
    }

}