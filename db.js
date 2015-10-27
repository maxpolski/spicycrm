var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Contacts');

module.exports = mongoose;
