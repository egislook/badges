'use strict';

const fs      = require('fs');
const riot    = require('riot');
const Module  = require('module');
let debug     = true;
let views     = {};

exports.renderHTML    = renderHTML;
exports.clientRequire = clientRequire;
exports.requireViews  = requireViews;
exports.compileRiot   = compileRiot;


function renderHTML(opts = {}){
  // Object.assign(opts, {
  //   VIEWS:  root.scripts,
  // });;
  return `<!DOCTYPE html> ${riot.render('html', opts)}`;
}

//compileRiot(__dirname + '/../public/index.html');

function compileRiot(filePath, cb){
  let mExport = clientRequire(filePath, riot.compile(fs.readFileSync(filePath, 'utf8')));

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

function requireViews(path, skipViewFiles, cb){
  fs.readdir(path, (err, files) => {
    if(err){ return new Error(err); }
    //console.log(files);

    let _loadedTagCount = 0;
    let _filePath, _fileStats;
    files.forEach((filename) => {

      _filePath = `${path}/${filename}`;
      _fileStats = fs.lstatSync(_filePath);

      if(!!_fileStats.isDirectory()){
        _loadedTagCount++;
        return requireViews(_filePath, skipViewFiles, cb);
      }

      if(!_fileStats.isFile() || skipViewFiles && skipViewFiles.indexOf(filename) >= 0){
        //console.log(_filePath, 'not file or skipviewfile');
        debug && console.log(`Riot view Skiped '${_filePath}'`);
        _loadedTagCount++;
        return;
      }

      compileRiot(_filePath, () => {
        debug && console.log(`Riot view Compiled '${_filePath}'`);
        _loadedTagCount++;
        views ? views[filename] = _filePath : false;
        _loadedTagCount === files.length && cb && cb();
      });

    });
  });
}
