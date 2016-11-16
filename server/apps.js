var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require ('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var bpJason = bodyParser.json();
var port = process.env.PORT || 4000;
var pg = require('pg');
var connectionString = 'postgress://localhost:5432/ArchiveDB';

//spin up server
app.listen( port, function(){
  console.log( 'server up on', port );
}); // end server up

app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url

app.use(express.static('public'));
