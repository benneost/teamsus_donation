const express = require("express");
const connection = require('../db');

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const redemptionsRoutes = express.Router();

// This section will help you get a list of all the redemptionss
redemptionsRoutes.route('/')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `redemptions` ",
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you get a single redemptions by id
redemptionsRoutes.route('/:redemptionid')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `redemptions` WHERE redemptionid = ? LIMIT 3", req.params.redemptionid,
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you create a new redemptions
redemptionsRoutes.route('/add')
    .post(function(req, res) {
        let sql = `INSERT INTO redemptions(rewardid, userid) VALUES (?)`;
        let values = [
            req.body.rewardid,
            req.body.userid
        ];  

        connection.query( 
            sql, [values],
            
            function(error, results) {
                if (error) throw error;
                res.json({
                    status: 200,
                    message: "New redemptions added successfully"
                })  
            }
        );

        
    });


module.exports = redemptionsRoutes;