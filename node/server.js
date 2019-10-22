'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://root:weakpassword@mongodb:27017/";

// HTTP routes for Node Express
const app = express();
app.get('/', (req, res) => {
  MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("website");

		dbo.collection("users").find({}).toArray(function (err, result) {
	        if (err) {
	            res.send(err);
	        } else {
	            res.send(JSON.stringify(result));
	        }
	    })

		db.close();
	}); 
});

// Listen to requests on HTTP 0.0.0.0:3000
app.listen(3000, '0.0.0.0');
console.log(`Running on http://localhost:8081`);