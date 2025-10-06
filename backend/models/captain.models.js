const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
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
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password must be at least 6 characters long'],
        select: false // Exclude password from query results by default
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended'],
        default: 'inactive'
    },
    vehicle: {
        color:{
            type: String,
            required: true,
            minLength: [3, 'Vehicle color must be at least 3 characters long']
        },
        plate:{
            type: String,
            required: true,
            minLength: [3, 'Vehicle plate must be at least 3 characters long'],
            unique: true
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Vehicle capacity must be at least 1']
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car', 'bike', 'auto']
        }
    },
    location:{
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        }
    },
    socketId: {
        type: String,
        default: null
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}


const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;