const functions = require('firebase-functions');
const riothing  = require('./riothing');

exports.root = functions.https.onRequest(riothing.route);

console.log('INIT functions');