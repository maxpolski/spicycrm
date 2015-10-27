var mongoose = require('../db.js');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(callback) {
	console.log('connection to database is open');

});

var ContactSchema = mongoose.Schema({
	name: String,
	company: String,
	email: String,
	phone: String,
	group: String,
});

var Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
