/*
 * GET home page.
 */
var ContactModel = require('../models/contact.js');
var ViewModel    = require('../models/view');

exports.index = function(req, res, next){
	var fs = require('fs');
	res.set('Content-Type', 'text/html');
	fs.access('public/views/index.html', fs.R_OK, function(err) {
		if(!err) {
			fs.readFile(('public/views/index.html'), function(err, data) {
				res.send(data);
			});
		} else {
			next(err);
		}
	});
};

exports.addContact = function(req, res, next) {
	if(req.body) {
		var data = {
			name: req.body.name + '',
			company: req.body.company + '',
			email: req.body.email + '',
			phone: req.body.phone + '',
			group: req.body.group + ''
		}

		var contact = new ContactModel(data);

		contact.save(function(err, value, affected) {
			if(err) {
				return next(err)
			} else {
				res.status(200);
				res.send(value);
			}

			res.end();
		});

	} else {
		next(new Error("body is empty"));
	}

}

exports.editContact = function(req, res, next) {
	if(req.body) {

		var data = {
			name: req.body.name,
			company: req.body.company,
			group: req.body.group,
			email: req.body.email,
			phone: req.body.phone
		}

		ContactModel.update({'_id': req.body._id}, data, function(err, raw) {
	      if(!err) {
					data._id = req.body._id;
					res.json(data);
	      } else {
	        next(err);
	      }
    });
	}
}

exports.deleteContact = function(req, res, next) {
	if(req.body) {
		ContactModel.remove({ _id: req.body._id}, function(err, val) {
			if(err) {
				next(err);
			} else {
				var data = {
					_id: req.body._id
				};
				res.status(200);
				res.json(data)
			}
		});
	}
}

exports.getContacts = function(req, res, next) {
	var contacts = [];

	ContactModel.find({}, function(err, val) {
		if(err) {
			next(err);
		} else {
			res.status(200);
			res.json(val);
		}
	});
}

exports.getInitState = function(req, res, next) {
	var State = {};
	var contacts;
	var views;
	//....
	ContactModel.find({})
	.then(function(contacts) {
		State.contacts = contacts;
		return ViewModel.find({});
	})
	.then(function(views) {
		State.views = views;
		res.json(State);
	})
	.catch(function(err) {
		next(err);
	});
}

exports.redirectIndex = function(req, res, next) {
	res.redirect('/');
}
