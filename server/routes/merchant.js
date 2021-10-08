const express = require("express");
const connection = require('../db');

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const merchantRoutes = express.Router();

// This section will help you get a list of all the merchants
merchantRoutes.route('/')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `merchant` ",
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you get a single merchant by id
merchantRoutes.route('/:merchantid')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `merchant` WHERE merchantid = ? LIMIT 3", req.params.merchantid,
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you create a new merchant
merchantRoutes.route('/add')
    .post(function(req, res) {
        let sql = `INSERT INTO merchant(mname) VALUES (?)`;
        let values = [
            req.body.mname
        ];  

        connection.query( 
            sql, [values],
            
            function(error, results) {
                if (error) throw error;
                res.json({
                    status: 200,
                    message: "New merchant added successfully"
                })  
            }
        );

        
    });


module.exports = merchantRoutes;