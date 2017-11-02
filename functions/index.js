const functions = require('firebase-functions');
const riothing  = require('riothing');
riothing.config(__dirname + '/public');

exports.root = functions.https.onRequest(riothing.reinit);

console.log('INIT functions');