'use strict';

// Setting all the constants
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://root:weakpassword@mongodb:27017/';

// HTTP routes for Node Express
const app = express();

// Simple method to return data with a html template wrapped around it.
function htmlTemplate(data) {
	return `<!DOCTYPE html>
<html>
	<head>
		<title>DockerComposeChallenge - Dan Sali - NodeJS</title>
		<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
	</head>
	<body>
		<h1>Data from Users collection on MongoDB</h1>
		<table>
			<tr>
				<th>Username</th>
				<th>Name</th>
				<th>Country</th>
			</tr>
			` + data + `
		</table>
	</body>
</html>`;
}

// Home page
app.get('/', (req, res) => {
	// Open connection to mongodb server
	MongoClient.connect(url, function(err, db) {
		// If error is found, best to stop :)
		if (err) throw err;

		// Select db, find all users and call a function with the data as an array
		var dbo = db.db('website');
		dbo.collection('users').find({}).toArray(function(err, result) {
			if (err) {
				// If errors found, best to stop there.
				res.send(err);
			} else {
				// Nice HTML formatting to loop through each entry in the array
				// Prints out username, name and country.
				var output = '';
				var count = 0;
				result.forEach(function(row) {
					count++;
					output += '<tr><td>'+row['username']+'</td><td>'+row['name']+'</td><td>'+row['country']+'</td></tr>\n';
				});

				if (count > 0) {
					res.send(htmlTemplate(output));
				} else {
					res.send(htmlTemplate('<tr>Nothing found :(</tr>'));
				}
			}
		});

		// Close DB connection
		db.close();
	}); 
});

// Data as JSON
app.get('/data', (req, res) => {
	// Open connection to mongodb server
	MongoClient.connect(url, function(err, db) {
		// If error is found, best to stop :)
		if (err) throw err;

		// Select db, find all users and return data as JSON
		var dbo = db.db('website');
		dbo.collection('users').find({}).toArray(function(err, result) {
			if (err) {
				// send error if exists
				res.send(err);
			} else {
				res.json(result);
			}
		});

		// Close DB connection
		db.close();
	}); 
});

// Listen to requests on HTTP 0.0.0.0:3000
app.listen(3000, '0.0.0.0');

// Message for clear instruction
console.log(`Running on http://localhost:8080`);