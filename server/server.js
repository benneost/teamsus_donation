require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add var routes to this section
const user = require("./routes/users.js");
const beneficiary = require("./routes/beneficiary.js");
const merchant = require("./routes/merchant.js");
const reward = require("./routes/reward.js");
const redemption = require("./routes/redemption.js");
const donation = require("./routes/donation.js");
const payment = require("./routes/payment.js");

// Add routes to this section
app.use('/user', user);
app.use('/beneficiary', beneficiary);
app.use('/merchant', merchant);
app.use('/reward', reward);
app.use('/redemption', redemption);
app.use('/donation', donation);
app.use('/payment', payment);


// Test if server is working
app.get('/status', (req, res) => res.send('Working!'));

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 5000);
app.listen(5000);






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