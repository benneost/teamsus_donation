const express = require("express");
const connection = require('../db');

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const donationRoutes = express.Router();

// This section will help you get a list of all the donations
donationRoutes.route('/')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `donation` ",
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you get a single donation by id
donationRoutes.route('/:donationid')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `donation` WHERE donationid = ? LIMIT 3", req.params.donationid,
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you create a new donation
donationRoutes.route('/add')
    .post(function(req, res) {
        let sql = `INSERT INTO donation(amount, points, beneficiaryid, userid, paymentid) VALUES (?)`;
        let values = [
            req.body.amount,
            req.body.amount * 10,
            req.body.beneficiaryid,
            req.body.userid,
            req.body.paymentid
        ];  

        connection.query( 
            sql, [values],
            
            function(error, results) {
                if (error) throw error;
                res.json({
                    status: 200,
                    message: "New donation added successfully"
                })  
            }
        );
    });

// This section will help you get a donation by userid
donationRoutes.route('/:userid')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `donation` WHERE userid = ? ", req.params.userid,
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });


module.exports = donationRoutes;