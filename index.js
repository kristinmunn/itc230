'use strict'
const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions

const album = require("./lib/data.js");
let handlebars = require("express-handlebars"); // should be at top of module 
app.engine(".html", handlebars({extname:'.html', defaultLayout: false}));//changes default to be html; creates handlebars.home template
app.set("view engine", ".html");

// send content of 'handlebars.home' view as HTML response
app.get('/home', (req,res) => {
  res.type('text/html');
  res.render('home', {albums: album.getAll()}); //render the whole thing we have in our array
 });

app.get('/', (req,res) => {
 res.type('text/html');
 res.render('home', {albums: album.getAll()}); //render the whole thing we have in our array
});

app.get('/detail', (req,res) => {
  res.type('text/html');
  const result = album.getAlbum(req.query.title);
  res.render('detail', {title: req.query.title, result: result, albums: album.getAll()});
});

//delete
app.get('/delete', (req, res) => {
  res.type('text/html');
 // let lengthbefore = album.getAlbum().length;
  let search = album.getAlbum(req.query.title); // get album object
  let resultfound = (search) ? search : "Album not found";
      let deleted = album.deleteAlbum(req.query.title);
    //  let lengthafter = album.getAlbum().length; 
  res.render('delete', {title: req.query.title,
    result: resultfound, delete: deleted, albums: album.getAll()});
    //length2: lengthafter, length1: lengthbefore, 
});

//add
 app.get('/add', (req, res) => {
  res.type('text/html');
     //let lengthbefore1 = album.getAll().length;
      let newAlbum = {"title":req.query.title, "artist":req.query.artist, "studio":req.query.studio};
      let add = album.addAlbum(newAlbum);
     // let lengthafter1 = album.getAll().length;
     res.render('add', {title: req.query.title,
      album: newAlbum, add: add, albums: album.getAll()});
      //length2: lengthafter1, length1: lengthbefore1,
     });

// send static file as response
app.get('/home2', (req, res) => {
  res.type('text/html');
  res.sendFile(__dirname + '/public/home1.html'); 
 });

 // send plain text response
app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('My name is Kristin. I am taking classes in computer programming to help widen my knowledge and skill base, '+
  'and to hopefully break into the world of IT as a career.');
 });

 // define 404 handler
app.use( (req,res) => {
  res.type('text/plain'); 
  res.status(404);
  res.send('404 - Not found');
 });

app.listen(app.get('port'), () => {
 console.log('Express started'); 
});
 
///////////////////////////////////

/* /// send content of 'home' view
app.get('/detail', (req,res) => {
  let result = album.get(req.query.title);
  res.render('details', {title: req.query.title, result: result });
 });
 */
