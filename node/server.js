'use strict';

// Setting all the constants
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://root:weakpassword@mongodb:27017/";

// HTTP routes for Node Express
const app = express();

// Home page
app.get('/', (req, res) => {
	// Open connection to mongodb server
	MongoClient.connect(url, function(err, db) {
		// If error is found, best to stop :)
		if (err) throw err;

		// Select db, find all users and call a function with the data as an array
		var dbo = db.db("website");
		dbo.collection("users").find({}).toArray(function(err, result) {
	        if (err) {
	        	// If errors found, best to stop there.
	            res.send(err);
	        } else {
	        	// Nice HTML formatting to loop through each entry in the array
	        	// Prints out username, name and country.
	            var output = "<!DOCTYPE html><html><body><title>DockerComposeChallenge - Dan Sali - NodeJS</title><h1>Data from Users collection on MongoDB</h1>";
	            output += "<table><tr><th>Username</th><th>Name</th><th>Country</th></tr>";
	            result.forEach(function(row) {
	            	output += "<tr><td>"+row['username']+"</td><td>"+row['name']+"</td><td>"+row['country']+"</td></tr>";
	            });
	            output += "</table></body></html>";
	            res.send(output);
	        }
	    })

		// Close DB
		db.close();
	}); 
});

// Listen to requests on HTTP 0.0.0.0:3000
app.listen(3000, '0.0.0.0');

// Message for clear instruction
console.log(`Running on http://localhost:8081`);