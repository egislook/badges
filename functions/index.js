const functions = require('firebase-functions');
const riothing  = require('./riothing');

exports.root = functions.https.onRequest(root);

function root(req, res){
  const opts = { 
    page: req.originalUrl.split('/').pop(),
    splash: req.query.splash
  };
  riothing.render(process.cwd() + '/public', opts).then((HTML) => res.send(HTML));
}

// exports.test = functions.https.onRequest((req, res) => {
//   res.status(200).send('hello from test');
// });

// exports.test2 = functions.https.onRequest((req, res) => {
//   res.status(200).send('hello from test2 function hehe');
// });

console.log('INIT functions');