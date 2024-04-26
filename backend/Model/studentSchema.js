const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email : String,
    password : String
})

const studentlogSchema = mongoose.model('studentCredential',schema);

module.exports = studentlogSchema;