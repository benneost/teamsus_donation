const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllRewards
} = require('./APIs/rewards')

app.get('/rewards', getAllRewards);
exports.api = functions.https.onRequest(app);