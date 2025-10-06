const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.models');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    if(!token){
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token });
    if(isBlacklisted){
        return res.status(401).json({ message: 'Token has been blacklisted. Please log in again.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded._id);
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
}
 

module.exports.authCaptain = async (req, res, next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1];
    if(!token){
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token });
    
    if(isBlacklisted){
        return res.status(401).json({ message: "Token has been blacklisted. Please log in again." });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded._id)
        req.captain = await captainModel.findById(decoded._id);
        next();
    }catch(err){
        // console.log(err);
        res.status(400).json({ message: "Invalid Token." });
    }
}