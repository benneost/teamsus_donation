require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./db');

// Add var routes to this section
var user = require("./routes/users.js");

// Add routes to this section
app.use('/user', user);


// Test if server is working
app.get('/status', (req, res) => res.send('Working!'));

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3000);
app.listen(3000);






// app.route('/user/:userId')
//     .get(function(req, res, next) {
//         connection.query(
//             "SELECT * FROM `user` WHERE userId = ? LIMIT 3", req.params.userId,
//             function(error, results, fields) {
//             if (error) throw error;
//             res.json(results);
//             }
//         );
//     });