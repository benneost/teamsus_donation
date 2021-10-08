const express = require("express");
const connection = require('../db');

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const rewardRoutes = express.Router();

// This section will help you get a list of all the rewards
rewardRoutes.route('/')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `reward` ",
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you get a single reward by id
rewardRoutes.route('/:rewardid')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `reward` WHERE rewardid = ? LIMIT 3", req.params.rewardid,
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you create a new reward
rewardRoutes.route('/add')
    .post(function(req, res) {
        let sql = `INSERT INTO reward(rname, description, pointsRequired, redemptionCap, expiryDate, merchantid) VALUES (?)`;
        let values = [
            req.body.rname,
            req.body.description,
            req.body.pointsRequired,
            req.body.redemptionCap,
            req.body.expiryDate,
            req.body.merchantid
        ];  

        connection.query( 
            sql, [values],
            
            function(error, results) {
                if (error) throw error;
                res.json({
                    status: 200,
                    message: "New reward added successfully"
                })  
            }
        );

        
    });


module.exports = rewardRoutes;