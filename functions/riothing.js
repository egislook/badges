'use strict';

const publicPath = __dirname + '/public';

const fs        = require('fs');
const riot      = require('riot');
const Module    = require('module');
const path      = require('path');
const Riothing  = clientRequire(publicPath + '/lib/riothing.js');
const content   = require(publicPath + '/content.json');

const riothing  = new Riothing();

const ROOT      = {
  VIEWS:  [],
  STORES: [],
};

init(publicPath, ROOT);

exports.renderHTML    = renderHTML;
exports.clientRequire = clientRequire;
exports.initViews     = initViews;
exports.compileRiot   = compileRiot;
exports.route         = route;



function route(req, res){
  const page    = req.originalUrl.split('/').pop();
  const splash  = req.query.splash;
  
  riothing.act('SET_ROUTE', page, splash);
  
  //res.send(renderHTML(ROOT));
  init(publicPath, ROOT).then(res.send(renderHTML(ROOT)));
}

function init(pubPath, root){
  initStores(pubPath + '/store').then((stores) => {
  
    stores.forEach( (store) => riothing.setStore(store.fn(content)) );
    
    root.STORES = stores.map((store) => ({ 
      name: store.name,
      path: store.path.replace(pubPath, '.')
    }));
  });
  
  return initViews(pubPath + '/app').then((views) => {
    compileRiot(pubPath + '/root.html');
    root.VIEWS = views.paths.map((path) => path.replace(pubPath, '.'));
  });
}

function initStores(dir = './public/store'){
  return readDir(path.resolve(dir)).then((files) => 
    files.map((filename) => {
      let _filePath = `${path.resolve(dir)}/${filename}`;
      let fn = clientRequire(_filePath);
      return { 
        path: _filePath, 
        filename,
        fn,
        name: fn.name,
      };
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
  let stores = opts.STORES && opts.STORES.slice(0).map(store => store.name) || [];
  return  `
    <!DOCTYPE html> 
    ${riot.render(tagName, opts)}
    <script>
      new Riothing({ stores: ${JSON.stringify(stores)}, state: '/content.json' });
      //riot.mount('app');
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
    ${ include.join('\n') }
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
