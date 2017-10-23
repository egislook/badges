'use strict';

const fs      = require('fs');
const riot    = require('riot');
const Module  = require('module');
const path    = require('path');

exports.render        = render;
exports.renderHTML    = renderHTML;
exports.clientRequire = clientRequire;
exports.initViews     = initViews;
exports.initMixins    = initMixins;
exports.compileRiot   = compileRiot;


function render(dir = './public', opts = {}){
  //console.log(dir);
  return initActions(dir + '/action')
    .then((actions) => actions.map(path => path.replace(dir, '.')))
    .then((ACTIONS) => 
      initMixins(dir + '/mixin')
        .then((mixins) => mixins.map(path => path.replace(dir, '.')))
        .then((MIXINS) => 
          initViews(dir)
            .then((views) => views.paths.map(path => path.replace(dir, '.')))
            .then((VIEWS) => renderHTML(Object.assign(opts, { VIEWS, MIXINS, ACTIONS })))
        )
    );
}

function initMixins(dir = './public/mixin'){
  return readDir(path.resolve(dir)).then((files) => 
    files.map((filename) => {
      let _filePath = `${path.resolve(dir)}/${filename}`;
      riot.mixin(
        filename.split('.')[1], 
        clientRequire(_filePath), 
        filename.indexOf('global') >= 0
      )
      return _filePath;
    })
  );
}

function initActions(dir = './public/action'){
  return readDir(path.resolve(dir)).then((files) => 
    files.map((filename) => {
      let _filePath = `${path.resolve(dir)}/${filename}`;
      return _filePath;
    })
  );
}

function initViews(dir, skipViewFiles){
  const viewPaths = [];
  
  return collectViews(dir, viewPaths).then(() => {
    return Promise
      .all(viewPaths.slice(0).map(compileRiot))
      .then((viewNames) => ({ 
        paths: viewPaths, 
        names: viewNames 
      }));
  });
}

function renderHTML(opts = {}, tagName = 'html'){
  return  `
    <!DOCTYPE html> 
    ${riot.render(tagName, opts)}
    <script>
      riot.mount('app');
    </script>
  `;
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

function readDir(dir){
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => err ? reject(err) : resolve(files));
  });
}

function collectViews(dir, views){
  return new Promise((resolve, reject) => {
    readDir(dir).then((files) => 
      Promise.all(files.map((filename) => storeFilePath(filename, dir, views)))
    ).then(resolve).catch(reject);
  });
}

function validateView(filePath, extensions = ['html', 'tag']){
  return extensions.indexOf(filePath.split('.').pop()) >= 0
}

 function storeFilePath(filename, dir, views){
  let _filePath   = `${dir}/${filename}`;
  let _fileStats  = fs.lstatSync(_filePath);
  
  if(!!_fileStats.isDirectory())
    return collectViews(_filePath, views);
  
   
  validateView(_filePath) && views.push(_filePath);
  
  return _filePath;
}
