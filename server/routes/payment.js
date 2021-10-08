const express = require("express");
const connection = require('../db');

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const paymentRoutes = express.Router();

// This section will help you get a list of all the payments
paymentRoutes.route('/')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `payment` ",
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you get a single payment by id
paymentRoutes.route('/:paymentid')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `payment` WHERE paymentid = ? LIMIT 3", req.params.paymentid,
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you create a new payment
paymentRoutes.route('/add')
    .post(function(req, res) {
        let sql = `INSERT INTO payment(amount, beneficiaryid, userid, donationid) VALUES (?)`;
        let values = [
            req.body.amount,
            req.body.beneficiaryid,
            req.body.userid,
            req.body.donationid
        ];  

        connection.query( 
            sql, [values],
            
            function(error, results) {
                if (error) throw error;
                res.json({
                    status: 200,
                    message: "New payment added successfully"
                })  
            }
        );

        
    });


module.exports = paymentRoutes;