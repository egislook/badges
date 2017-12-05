const functions = require('firebase-functions');
const riothing  = require('./riothing.js');
riothing.config(__dirname + '/public');

exports.root = functions.https.onRequest(riothing.route);

console.log('INIT functions');