const express = require("express");
const connection = require('../db');

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const beneficiaryRoutes = express.Router();

// This section will help you get a list of all the beneficiaries
beneficiaryRoutes.route('/')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `beneficiary` ",
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you get a single beneficiary by id
beneficiaryRoutes.route('/:beneficiaryid')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `beneficiary` WHERE beneficiaryid = ? LIMIT 3", req.params.beneficiaryid,
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you create a new beneficiary
beneficiaryRoutes.route('/add')
    .post(function(req, res) {
        let sql = `INSERT INTO beneficiary(bname, cause, description, url) VALUES (?)`;
        let values = [
            req.body.bname,
            req.body.cause,
            req.body.description,
            req.body.url
        ];  

        connection.query( 
            sql, [values],
            
            function(error, results) {
                if (error) throw error;
                res.json({
                    status: 200,
                    message: "New beneficiary added successfully"
                })  
            }
        );

        
    });



module.exports = beneficiaryRoutes;