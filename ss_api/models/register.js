const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passward: {
        type: String,
        required: true
    }
});

const Register = mongoose.model('Register',RegisterSchema);
module.exports = Register;