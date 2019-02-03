/**********************************************************************************  
 * WEB322 – Assignment 02 
 *  I declare that this assignment is my own work in accordance 
 * with Seneca  Academic Policy. No part of this assignment has been copied manually
 *  or electronically from any other source (including 3rd party web sites) or 
 * distributed to other students.  
 * Name: KIRBY LIM 
 * Student ID: 131684177   
 * Date: 2019-02-03   
 * Online (Heroku) Link: 
 **********************************************************************************/  


var data = require ("./data-service.js");
var express = require('express');
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;



function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }


app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,"/views/home.html"));
});
    
app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname,"/views/about.html"));
});

app.get("/employees", function(req,res) {
    data.getAllEmployees()
    .then((data) => {res.json(data)})
    .catch((err) => {res.json(err)})    
 });

app.get('/managers', function(req, res){
    data.getManagers()
    .then((data) => {res.json(data)})
    .catch((err) => {res.json(err)})  
 });

app.get('/departments', function(req, res){
    data.getDepartments()
    .then((data) => {res.json(data)})
    .catch((err) => {res.json(err)})  
 });

 app.use(function(req, res){
    res.redirect(404, 'https://medium.com/@CollectUI/404-page-design-inspiration-march-2017-f6d9f7efd054');
 });


data.initialize()
.then((data) => {
    app.listen(HTTP_PORT, onHttpStart);
})
.catch((err) => {
    console.log("Error: " + err);
});


