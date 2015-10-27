var mongoose = require('../db.js');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(callback) {
	console.log('connection to database is open');

});

var ViewSchema = mongoose.Schema({
	text: String,
	link: String
});

var View = mongoose.model('View', ViewSchema);

module.exports = View;
