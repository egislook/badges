const functions = require('firebase-functions');
const riothing  = require('riothing');

exports.root = functions.https.onRequest(riothing.reinit);

console.log('INIT functions');