const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minLength: [3, 'First name must be at least 3 characters long']
        },
        lastName: {
            type: String,
            minLength: [3, 'Last name must be at least 3 characters long']
        }
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },

    password: {
        type: String,
        required: true,
        minLength: [6, 'Password must be at least 6 characters long'],
        select: false // Exclude password from query results by default
    },

    socketId: {
        type: String,
        default: null
    }
})

// Generate Auth Token
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
    return token;
}

// compare password 
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

// hash password
userSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
