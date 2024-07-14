const mongoose = require('mongoose');
const tools = require('./tools.js')

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
},
{
    timestamps: true
});

UserSchema.methods.toJSON = tools.toJSON;

module.exports = mongoose.model('User', UserSchema);