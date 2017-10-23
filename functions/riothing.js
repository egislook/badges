'use strict';

const fs      = require('fs');
const riot    = require('riot');
const Module  = require('module');
const path    = require('path');

exports.render        = render;
exports.renderHTML    = renderHTML;
exports.clientRequire = clientRequire;
exports.requireViews  = requireViews;
exports.compileRiot   = compileRiot;


function render(dir = '../public', opts = {}){
  console.log(dir);
  return requireViews(dir)
    .then((views) => views.paths.map(path => path.replace(dir, '.')))
    .then((VIEWS) => renderHTML(Object.assign(opts, { VIEWS })));
}

function renderHTML(opts = {}, tagName = 'html'){
  return `<!DOCTYPE html> ${riot.render(tagName, opts)}`;
}

function compileRiot(filePath){
  return clientRequire(filePath, riot.compile(fs.readFileSync(filePath, 'utf8')));
}

function clientRequire(filePath, code, include){
  filePath = path.resolve(filePath);
  include = include || [`var riot = require('riot');`];
  code = code || fs.readFileSync(filePath, 'utf8');
  let paths = Module._nodeModulePaths(__dirname);
  code = `
    ${ include }
    module.exports = ${ code }
  `;
	var m = new Module(filePath, module.parent);
	m.filename = filePath;
	m.paths = paths;
	m._compile(code, filePath);
  return m.exports;
}

function requireViews(dir, skipViewFiles){
  const viewPaths = [];
  
  return collectFiles(dir, viewPaths).then(() => {
    return Promise
      .all(viewPaths.slice(0).map(compileRiot))
      .then((viewNames) => ({ 
        paths: viewPaths, 
        names: viewNames 
      }));
  });
}

function readDir(dir){
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => err ? reject(err) : resolve(files));
  });
}

function collectFiles(dir, views){
  return new Promise((resolve, reject) => {
    readDir(dir).then((files) => 
      Promise.all(files.map((filename) => storeFilePath(filename, dir, views)))
    ).then(resolve).catch(reject);
  });
}

function validate(filePath, extensions = ['html', 'tag']){
  return extensions.indexOf(filePath.split('.').pop()) >= 0
}

 function storeFilePath(filename, dir, views){
  let _filePath   = `${dir}/${filename}`;
  let _fileStats  = fs.lstatSync(_filePath);
  
  if(!!_fileStats.isDirectory())
    return collectFiles(_filePath, views);
  
   
  validate(_filePath) && views.push(_filePath);
  
  return _filePath;
}
