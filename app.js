var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {

}
app.use(express.errorHandler());

app.get('/', routes.index);
app.post('/addcontact', routes.addContact);
app.get('/getcontacts', routes.getContacts);
// app.get('/contacts', routes.index);
// app.get('/dashboard', routes.index);
app.get('/getinitstate', routes.getInitState);
app.post('/editcontact', routes.editContact);
app.post('/deletecontact', routes.deleteContact);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
