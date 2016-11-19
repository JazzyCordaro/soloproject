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

// // talking to DB
// app.get('/getMovies', function(req, res){
//   console.log('getMovies route hit');
//   //connect to DB: The Archive
//   pg.connect(connectionString, function(err, client, done){
//     if(err){
//       console.log(err);
//     }else{
//       console.log('connected to DB');
//       var resultsArray = [];
//       var queryResults = client.query('SELECT * FROM movies ORDER BY title ASC');
//       queryResults.on('row', function(row){
//         resultsArray.push(row);
//       });
//       queryResults.on('end', function(){
//         done();
//         return res.json(resultsArray);
//       }); // end queryResults
//     } // end else
//   });//end connect
// }); // end /getMovies

app.use(express.static('public'));
