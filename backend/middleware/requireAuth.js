const jwt = require("jsonwebtoken")
const User = require("../models/user")

const requireAuth = async(req,res,next) =>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET);

        if (Date.now() > decoded.exp) {
            return res.sendStatus(401);
        }

        const user = await User.findById(decoded.sub);
        if (!user) {
            return res.sendStatus(401);
        }
        
        req.user = user;
        next();
    } catch (error) {
        console.error('Error in requireAuth middleware:', error);
        res.sendStatus(401);
    }
}

module.exports = requireAuth;
