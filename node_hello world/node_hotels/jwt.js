const jwt = require("jsonwebtoken");

const jwtAuthMiddware = (req, res, next)=>{
    const token  = req.headers.authorization.split(" ")(1);
    if(!token) return res.stutas(401).json({error: "Unauthorized"});



    try {
        // verify the jwt token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        // attach user information to the  request object
        request.user = decoded;
        next()


    } catch (error) {
        console.error(error);
        res.status(401).json({error: "Invalid Token"});
    }
}





// generate jwt token 
const generateToken =(userdata) =>{
    return jwt.sign(userdata, process.env.JWT_SECRET)
}

 
module.exports  =  {jwtAuthMiddware, generateToken};






 