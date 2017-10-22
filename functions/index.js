const functions = require('firebase-functions');
const fs        = require('fs');
const riot      = require('riot');
const Module    = require('module');
const riothing  = require('./riothing.js');

const cfg = {
  appPath:  __dirname + '/../public/app/',
  htmlPath: __dirname + '/../public/index.html'
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.test = functions.https.onRequest((req, res) => {
  res.status(200).send('hello from test');
});

exports.test2 = functions.https.onRequest((req, res) => {
  res.status(200).send('hello from test2 function hehe');
});

exports.root = functions.https.onRequest((req, res, next) => {
  
  riothing.requireViews(cfg.appPath, [], () => {
    riothing.compileRiot(cfg.htmlPath, () => {
      res.status(200).send(riothing.renderHTML());
    });
  });
  
  
  //res.status(200).send(renderHTML())
});

console.log('INIT functions');