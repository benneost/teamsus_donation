const express = require("express");
const connection = require('../db');

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const userRoutes = express.Router();

// This section will help you get a list of all the users
userRoutes.route('/')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `user` ",
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you get a single user by id
userRoutes.route('/:userId')
    .get(function(req, res, next) {
        connection.query(
            "SELECT * FROM `user` WHERE userId = ? LIMIT 3", req.params.userId,
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            }
        );
    });

// This section will help you create a new user
userRoutes.route('/add?:userid&:username&:joindate&:gender&:occupation&:age&:email&:phonenum&:password&:points')
    .post(function(req, res) {
        let sql = `INSERT INTO user(userid, username, joindate, gender, occupation, age, email, phonenum, password, points) VALUES (?)`;
        let values = [
            req.body.userid,
            req.body.username,
            req.body.joindate,
            req.body.gender,
            req.body.occupation,
            req.body.age,
            req.body.email,
            req.body.phonenum,
            req.body.password,
            req.body.points
            ];
        connection.query( 
            sql, [values],
            
            function(error, results) {
                if (error) throw error;
                res.json({
                    status: 200,
                    message: "New user added successfully"
                })  
            }
        );
    });


module.exports = userRoutes;

// (username, '2020-12-11', gender, occupation, age, email, phone, password, 0)