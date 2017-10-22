const functions = require('firebase-functions');
const fs        = require('fs');
const riot      = require('riot');
const Module    = require('module');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.test = functions.https.onRequest((req, res) => {
  res.status(200).send('hello from test');
});

exports.test2 = functions.https.onRequest((req, res) => {
  res.status(200).send('hello from test2 function hehe');
});

exports.root = functions.https.onRequest((req, res) => {
  //console.log('rendering root');
  //res.status(200).send('ROOTTTTT');
  compileRiot(__dirname + '/../public/index.html', () => {
    res.status(200).send(renderHTML());
  });
  //res.status(200).send(renderHTML())
});



function renderHTML(opts = {}){
  // Object.assign(opts, {
  //   VIEWS:  root.scripts,
  // });
  

  return `<!DOCTYPE html> ${riot.render('html', opts)}`;
}

//compileRiot(__dirname + '/../public/index.html');

function compileRiot(filePath, cb){
  let mExport = clientRequire(filePath, riot.compile(fs.readFileSync(filePath, 'utf8')));
  console.log(mExport);

	if(!!cb)
    return cb();

  return mExport;
}

function clientRequire(filePath, code){
  code = code || fs.readFileSync(filePath, 'utf8');
  let paths = Module._nodeModulePaths(__dirname);
  code = `
    var riot = require('riot');
    module.exports = ${ code }
  `;
	var m = new Module(filePath, module.parent);
	m.filename = filePath;
	m.paths = paths;
	m._compile(code, filePath);
  return m.exports;
}