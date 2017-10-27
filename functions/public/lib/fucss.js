var fucss = {};

fucss.watch = window.fucssWatch !== undefined ? window.fucssWatch : 0;
fucss.init = window.fucssInit !== undefined ? window.fucssInit : true;
fucss.anim = window.fucssAnim !== undefined ? window.fucssAnim : true;
fucss.glob = window.fucssGlob !== undefined ? window.fucssGlob : true;
fucss.fux = window.fucssFux !== undefined ? window.fucssFux : true;
fucss.debug = window.fucssDebug !== undefined ? window.fucssDebug : false;

fucss.seps = {
  'value': ':',
  'space': '-',
  'target': '_',
  'comma': '.',
  'important': '!',
  'and': '+',
  'fStart': '(',
  'fEnd': ')',
  'next': '~',
};

fucss.media = {
  sm: 400,
  md: 768,
  lg: 1024,
  smx: 399,
  mdx: 767,
  lgx: 1023,
};

fucss.states = {
  hov: 'hover',
  act: 'active',
  foc: 'focus',

  hv: 'hover',
  ac: 'active',
  fc: 'focus',
  //version 0.6.3
  bf: 'before',
  af: 'after',
  //version 0.6.6
  lc: 'last-child',
  last: 'last-child',
  first: 'first-child',
  //version 0.6.8
  rt: 'root',
  root: 'root',
};

fucss.properties = {
  pdg: 'padding',
  mrg: 'margin',
  clr: 'color',
  bg: 'background',
  //txt: 'text-align',
  brd: 'border',
  dsp: 'display',
  pos: 'position',
  h: 'height',
  w: 'width',
  fnt: 'font',
  //flt: 'float',
  vlgn: 'vertical-align',
  hlgn: 'text-align',
  col: 'width',
  lh: 'line-height',
  crs: 'cursor',
  dec: 'text-decoration',
  tb: 'table',
   // added by me
  idx: 'z-index',
  op: 'opacity',
  tran: 'text-transform',
  mh: 'min-height',
  mxw: 'max-width',
  mxh: 'max-height',
  mnw: 'min-width',
  mnh: 'min-height',

  ws: 'white-space',

  //version 4
  ff: 'font-family',
  ta: 'text-align',
  fs: 'font-size',
  dp: 'display',
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  of: 'overflow',
  br: 'border-radius',
  bd: 'border',
  fw: 'font-weight',
  c: 'color',
  p: 'padding',
  m: 'margin',
  va: 'vertical-align',
  ps: 'position',
  xw: 'max-width',
  nw: 'min-width',
  td: 'text-decoration',
  z: 'z-index',
  fl: 'float',
  cl: 'clear',
  sh: 'box-shadow',
  tr: 'text-transform',

  // version 0.5.3
  ol: 'outline',

  // version 0.5.5
  bz: 'box-sizing',
  bs: 'box-shadow',
  tl: 'table-layout',

  //version 0.5.7
  lis: 'list-style',
  ls: 'letter-spacing',

  //version 0.6.3
  ww: 'word-wrap',
  od: 'order',
  fd: 'flex-direction',
  flxd: 'flex-direction',
  flxw: 'flex-wrap',
  flxg: 'flex-grow',
  flxs: 'flex-shrink',
  flxb: 'flex-basis',
  flx: 'flex',
  as: 'align-self',
  ai: 'align-items',
  ac: 'align-content',
  flxf: 'flex-flow',

  //version 0.6.6
  jc: 'justify-content',
  cont: 'content',

  //version 0.6.8
  tt: 'text-transform',
  ts: 'transition',
  ft: 'filter',
  bft: 'backdrop-filter',
  tf: 'transform',
  sp: 'shape-outside',
  wc: 'will-change',
  
  //version 0.6.9
  mbm: 'mix-blend-mode',
  tsd: 'transition-delay',
};

fucss.units = ['px', 'em', 'pc', 'vh', 'vw', 'dg', 's'];

fucss.groups = ['tb', 'rl', 'tr', 'rb', 'bl', 'tl'];

fucss.addons = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  pos: 'position',
  rad: 'radius',
  fml: 'family',
   // added by me
  sz: 'size',
  rd: 'radius',
  w: 'width',
  clr: 'color',
  stl: 'style',
  lyt: 'layout',
  wg: 'weight',
  upc: 'uppercase',
  //version 4
  c: 'color',
  s: 'style',
  rp: 'repeat',
  ps: 'position',
  //version 0.6.8
  x: 'X',
  y: 'Y',
  z: 'z',
  //version 0.6.9
  dl: 'delay'
};

fucss.values = {
  bb: 'border-box',
  bot: 'bottom',
  c: 'center',
  r: 'right',
  l: 'left',
  t: 'top',
  b: 'bottom',
  m: 'middle',
  n: 'none',
  clr: 'color',
  rel: 'relative',
  abs: 'absolute',
  fix: 'fixed',
  inh: 'inherit',
  tc: 'table-cell',
  td: 'table-cell',
  tr: 'table-row',
  tb: 'table',
  no: 0,
  hid: 'hidden',
  vis: 'visible',
  pnt: 'pointer',
  sld: 'solid',
  // added by me
  ib: 'inline-block',
  blk: 'block',
  cl: 'clear',

  //version 4
  hd: 'hidden',
  vs: 'visible',
  bk: 'block',
  pt: 'pointer',
  rl: 'relative',
  ab: 'absolute',
  sd: 'solid',
  ts: 'transparent',
  np: 'nowrap',
  bt: 'both',
  fx: 'fixed',
  cv: 'cover',
  uc: 'uppercase',
  rp: 'no-repeat',
  nrp: 'no-repeat',

  //version5
  ds: 'dashed',
  dt: 'dotted',

  //version 0.6.3
  pl: 'pre-line',
  nm: 'normal',
  bl: 'baseline',
  flx: 'flex',
  if: 'inline-flex',
  row: 'row',
  col: 'column',
  rr: 'row-reverse',
  cr: 'column-reverse',
  li: 'list-item',
  wrp: 'wrap',
  sb: 'space-between',
  sa: 'space-around',
  fs: 'flex-start',
  fe: 'flex-end',
  stc: 'stretch',

  //version 0.6.8
  trf: 'transform',
  eo: 'ease-out',
  ei: 'ease-in',
  ul: 'underline',
  lc: 'lowercase',
  cap: 'capitalize',
  
  //version 0.6.9
  dif: 'difference',
  light: 'lighten',
  dark: 'darken',
  eio: 'ease-in-out',
};

//version 0.6.8
fucss.functions = {
  //background
  lg: 'linear-gradient',
  rg: 'radial-gradient',

  //color
  rgb: 'rgb',
  rgba: 'rgba',
  //transition
  cb: 'cubic-bezier',
  // url: 'url',
  // img: 'img',
  //util
  //clc: 'calc',
  //el: 'element',
  //atr: 'attr',
}

fucss.transforms = {
  scl: 'scale',
  trl: 'translate',
  rot: 'rotate',
  skw: 'skew',
  mtx: 'matrix',
  prp: 'perspective',
  trx: 'translateX',
  try: 'translateY',
  trz: 'translateZ',
}

fucss.filters = {
  blr: 'blur',
  bh: 'brightness',
  cn: 'contrast',
  ds: 'drop-shadow',
  gs: 'greyscale',
  hr: 'hue-rotate',
  iv: 'invert',
  //op: 'opacity',
  st: 'saturate',
  sp: 'sepia',
}

fucss['shape-outside'] = {
  crc: 'circle',
  rec: 'rect',
  els: 'ellipse',
  ins: 'inset',
  poly: 'polygon',
}
//combines all functions
Object.assign(fucss.functions, fucss.transforms, fucss.filters, fucss['shape-outside']);

fucss.ignore = ['fa', 'fix', 'trans', 'cursor', 'wrap', 'owlServices', 'owl', 'gm', 'fux', 'fu'];

//version 4
fucss.colorazable = [
  'color',
  'background',
  'background-color',
  'border',
  'border-color',
  'border-bottom',
  'border-top',
  'border-left',
  'border-right',
  'border-right-color',
  'border-left-color',
  'border-top-color',
  'border-bottom-color',
  'box-shadow',
];

fucss.propertable = [
  'transition',
  'will-change',
];

fucss.colors = {
  //version 6 colors
  prim:     '#DE3E3E',  // red
  sec:      '#2F3B50',  // grey dark

  red:      '#F44336',
  pink:     '#E91E63',
  purple:   '#9C27B0',
  dpurple:  '#673AB7',
  indigo:   '#3F51B5',
  blue:     '#2196F3',
  lblue:    '#03A9F4',
  cyan:     '#00BCD4',
  teal:     '#009688',
  green:    '#4CAF50',
  lgreen:   '#8BC34A',
  lime:     '#CDDC39',
  yellow:   '#FFEB3B',
  amber:    '#FFC107',
  orange:   '#FF9800',
  dorange:  '#FF5722',
  brown:    '#795548',
  grey:     '#9E9E9E',
  bgrey:    '#607D8B',

  black:    '#111',
  silver:   '#DDD',
  white:    '#fff',

  navy:     '#001f3f',
  aqua:     '#7FDBFF',
  teil:     '#39CCCC',
  olive:    '#3D9970',
  maroon:   '#85144b',
  fuchsia:  '#F012BE',
  // social
  twitter:  '#5AACF2',
  facebook: '#3C599C',
  google:   '#D8503D',
};

fucss.colorMods = {
  //50:   'l52',  // white 'a13'
  100:  'l37',  // white 'a31'
  200:  'l26',  // white 'a50'
  300:  'l12',  // white 'a7'
  400:  'l6',   // white '185'
  500:  '',
  600:  'd6',   // black 'a91'
  700:  'd12',  // black 'a81'
  800:  'd18',  // black 'a71'
  900:  'd24'   // black 'a52'
};

fucss.config = {
  'prim': 'colors',
  'sec':  'colors',
  'txt':  'colors',
  'err':  'colors',
  'warn': 'colors',
  'ok':   'colors',
};

//assigning custom client stuff
!!window.fucssValues && Object.assign(fucss.values, window.fucssValues);
!!window.fucssColors && Object.assign(fucss.colors, window.fucssColors);

window.onload=function(){

  //initiating the generator
  fucss.watch && setInterval(fucss.generateStyling, fucss.watch);
  fucss.init && !window.riot && fucss.generateStyling();
  fucss.init && !!window.riot && fucss.riotExtractNGenerate();
};

fucss.riotExtractNGenerate = function(){
  var _tags = document.querySelectorAll('script[type="riot/tag"');
  var _jsStr = document.body.outerHTML;
  var _jsLoadedCount = 0;
  _tags.forEach(function(tag){
  	window.riot.compile(tag.src || tag.getAttribute('data-src'), function(js){
    	_jsStr += js;
    	_jsLoadedCount++;
    	_jsLoadedCount === _tags.length && fucss.generateStyling({riot: _jsStr, returnStyle: false});
  	});
  });
}

fucss.generateStyling = function(opts){

  console.time('Fucss');
  var classNumber = 0, classDone = 0;
  var cssString = '';
  var cssMediaQueries = {
    sm: [],
    md: [],
    lg: []
  };
  var cssMissing = [];

  var classHarvestingMethodName = opts && opts.jsx
    ? 'harvestClassesFromJsx'
    : opts && opts.riot || !!window.riot
      ? 'harvestClassesFromRiot'
      : 'harvestClassesFromHtml';

  var htmlString = (opts && (opts.jsx || opts.riot || opts.html)) || document.body.outerHTML;

  fucss[classHarvestingMethodName](htmlString)
    .forEach(function(className){
      classNumber++;
      var target = className.split(fucss.seps.target);

      var splitedClassName = target.shift().split(fucss.seps.value);

      //props
      var props = splitedClassName.shift().split(fucss.seps.space);

      var mediaQuery = extractMediaQuery(props);
      var state = extractState(props);

      //fucss.values
      var prop = props.shift();
      //ignore props
      if(fucss.ignore.indexOf(prop) !== -1)
        return;

      var value = splitedClassName.pop();
      if(!value)
        return fucss.debug && console.warn('No value specified. Use value seperator ' + fucss.seps.value + ' for "' + className + '"');
      
      var values = value && value.split(fucss.seps.space);

      if(fucss.config[prop]){
        value = fucss[fucss.config[prop]][value] || modifyColor(value) || value;
        fucss[fucss.config[prop]][prop] = value;
        return;
      }

      //shorthand functions
      prop    = setShortcutProp(prop, value, values) || prop;
      values  = setShortcutValues(prop, value, values) || values;

      if(Object.keys(fucss.properties).indexOf(prop) === -1 && prop.indexOf(',') === -1)
        return fucss.debug && console.warn('prop name "' + prop + '" is unknown. Check if class "' + className + '" is valid');
      if(!prop)
        return fucss.debug && console.warn('No prop specified. Use prop seperator ' + fucss.seps.space + ' for "' + className + '"');
      if(!fucss.properties[prop] && prop.indexOf(',') < 0)
        cssMissing = cssMissing.concat([prop]);

      prop = combineProps(prop, props);
      props = modifyProps(props);
      value = modifyValue(values, prop);
      //if(prop.indexOf('transform') !== -1) console.log(prop, props, value);

      var cssRule = generateCssRule(className, prop, props, value, state, target);
      classDone++;
      //if(prop === 'transform') console.log(state, prop, props, value, cssRule);

      mediaQuery
        ? cssMediaQueries[mediaQuery] = cssMediaQueries[mediaQuery] ? (cssMediaQueries[mediaQuery] + cssRule) : cssRule
        : cssString += cssRule;

    });

  //sets fucss.media queries at the end
  Object.keys(cssMediaQueries).length
    && Object.keys(cssMediaQueries).forEach(function(mediaName){
      var rule = mediaName.indexOf('x') !== -1 ? 'max-width' : 'min-width';

      if(cssMediaQueries[mediaName].length){
        cssString += '@media only screen and (' + rule + ': ' + fucss.media[mediaName] + 'px) {\n' + cssMediaQueries[mediaName] + '}\n';
      }
    });

  //console.log(cssString);
  if(opts && opts.returnStyle){
    return cssString;
  }else{
    fucss.fux   ? cssString += fucss.generateExtras()       : false;
    fucss.glob  ? cssString += fucss.generateGlobalExtras() : false;
    fucss.anim  ? cssString += fucss.generateAnimations()   : false;
    //console.log(document.querySelector('style'));
    if(!document.querySelector('style')){
      var css = document.createElement('style');
      css.type = 'text/css';
      css.appendChild(document.createTextNode(cssString));
      document.getElementsByTagName("head")[0].appendChild(css);
    }else{
      document.querySelector('style').innerHTML = cssString + document.querySelector('style').innerHTML;
    }

  }

  console.log('Classes: ' + classDone + ' / ' + classNumber);
  console.timeEnd('Fucss');

  if(cssMissing.length)
    console.warn('Used as full prop [ ' + cssMissing + ' ]');

  // from class to css rule

  function extractMediaQuery(props){
    var mediaValue = props.length && props[0];
    if(Object.keys(fucss.media).indexOf(mediaValue) !== -1){
      return props.shift();
    }
  }

  function extractState(props){
    var stateValue = props.length && props[0];
    if(Object.keys(fucss.states).indexOf(stateValue) !== -1){
      return fucss.states[props.shift()];
    }
  }

  function modifyColor(value){
    if(fucss.colors[value]) return fucss.colors[value];

    //checks if there is color and modifier (3 chars length) specified
    if(fucss.colors[value.substring(0, value.length-3)]
      && fucss.colorMods[value.substring(value.length-3)]){

      return fucss.generateColor(
        fucss.colors[value.substring(0, value.length-3)],
        fucss.colorMods[value.substring(value.length-3)]
      );
    }

    if(new RegExp(/(a\d\d\b)|(a\d\b)|(l\d\d\b)|(d\d\d\b)/).test(value)){
      var length = value.length;

      var modifierPos = new RegExp(/(a\d\b)/).test(value) ? length-2 : length-3;
      var modifier = value.substring(modifierPos);
      modifier = fucss.colorMods[modifier] || modifier;
      value = fucss.colors[value.substring(0, modifierPos)] || value.substring(0, modifierPos);

      return fucss.generateColor(value, modifier);

    } else if(new RegExp(/(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i).test(value)){
      return '#' + value;
    }
  }

  function modifyValue(valueList, prop){
    //console.log(valueList, prop, valueList.length);
    var functions = [];
    valueList = valueList.map(modeValue);
    if(functions.length)
      return generateFunctionValue(functions, valueList);

    return valueList.join(' ');
    
    function modeValue(value){
      
      if(fucss.values[value])
        return fucss.values[value];

      let func = fucss.functions[value];
      if(func){
        functions.push(func);
        return func;
      }

      if(fucss.propertable.indexOf(prop) !== -1 && fucss.properties[value])
        return fucss.properties[value];

      if(fucss.colorazable.indexOf(prop) !== -1){
        //console.log(prop, value)
        var modifiedColor = modifyColor(value);
        if(modifiedColor) return modifiedColor;
      }

      var unit = value.replace(/\d*\.?\d*/g, '');
      if(unit && (unit.length === 3 || unit.length === 2)){
        value = value.replace(unit, '');

        if(unit.indexOf('n') !== -1) value = -value;
        if(unit.indexOf('pc') !== -1 ) return value + '%';
        if(unit.indexOf('dg') !== -1 ) return value + 'deg';
        return value + unit.replace('n', '');
      }
      
      //get only sticky values exclude function values
      if(value.indexOf(',') > 0 && value.indexOf('(') === -1)
        return value.split(',').map(modeValue).join(',');

      if(value === fucss.seps.important)
        return '!important';

      if(prop === 'font-family'){
        value = value.replace(fucss.seps.and, ' ');
        return '"'+value+'"';
      }

      return value;
    }
  }

  function generateFunctionValue(functions, valueList){
    var firstFunctionIndex = valueList.indexOf(functions[0]);
    var values = [];
    if(firstFunctionIndex !== 0)
      values = valueList.slice(0, firstFunctionIndex);

    for(var index in functions){
      index = parseInt(index);
      var start = valueList.indexOf(functions[index]) + 1;
      var end = functions[index + 1]
        ? valueList.indexOf(functions[index + 1])
        : valueList.length;
      functions[index] = functions[index] + '(' + valueList.slice(start, end).join(', ') + ')';
    }
    valueList = values.concat(functions);
    return valueList.join(' ');
  }

  function setShortcutProp(prop, value, values){
    if(fucss.transforms[prop]){
      values.unshift(prop);
      return 'tf';
    }
    
    if(fucss.filters[prop]){
      values.unshift(prop);
      return 'ft';
    }

    if(fucss['shape-outside'][prop]){
      values.unshift(prop);
      return 'so';
    }
  }

  function setShortcutValues(prop, value, values){
    if(prop === 'bs'){
      if(values.length !== 1) return;
      var index = parseInt(values.shift());

      values.push(
        0 + 'px',
        1 * index + 'px',
        2 * index + 'px',
        '000a' + (8 + (index * 2))
      )

      index > 2 && values.push(
        ',',
        0 + 'px',
        1 * (index * 3) + 'px',
        2 * (index * 3) + 'px',
        '000a' + (6 + ((index-1) * 2))
      )

      return values;
    }

    if(prop === 'ts'){
      if(values.length > 2) return;
      values[1] = values[1] || '.45s';
      values[2] = values[2] || 'cubic-bezier(0.23, 1, 0.32, 1)'; //cb-.26-.11-.78-.35
      return values;
    }
  }

  function modifyProps(props){
    var combinedProps = [];
    props.forEach(function(prop){
      combinedProps.push(fucss.addons[prop] || prop);
    });

    return combinedProps;
  }

  function combineProps(prop, props){
    return prop = fucss.properties[prop] || prop;
    prop = [prop].concat(props);
    return prop.join('-');
  }

  function generateCssRule(className, prop, props, value, state, target){

    className = className.replace(fucss.seps.value, '\\:');
    className = className.replace(fucss.seps.comma, '\\.');
    className = className.replace(fucss.seps.important, '\\!');
    className = className.replace(fucss.seps.and, '\\+');
    className = className.replace(fucss.seps.fStart, '\\(');
    className = className.replace(fucss.seps.fEnd, '\\)');
    className = className.replace(fucss.seps.next, '\\~');

    var firstAddon = props.length && props[0];
    var isGroup = fucss.groups.indexOf(firstAddon) !== -1;

    state ? className += (':' + state) : false;
    var rules = '';

    className = className.split(',').join('\\,');

    //grouped props by comma
    var groupedProps = prop.split(',');

    if(groupedProps && groupedProps.length > 1){
      groupedProps.forEach(function(char){
        rules += (fucss.properties[char] || char) + ':' + value + ';';
      });
    } else {

      //grouped fucss.addons
      if(!isGroup){
        prop = [prop].concat(props).join('-');
        rules = prop + ':' + value + ';';
      }else{
        firstAddon.split('').forEach(function(char){
          rules += prop + '-' + fucss.addons[char] + ':' + value + ';';
        });
      }
    }

    if(target && target.length){
      var allIndex = target.indexOf('all');
      if(allIndex !== -1)
        target[allIndex] = '*';

      className = className + ' ' + target.join(' ');
    }

    return '.' + className + '{' + rules + '}\n';

  }

  return true;
}

//---------- color section Starts

function hex2rgb(hex, opts){
  var hex = hex.replace('#', '');
  var rgb = hex.match(new RegExp('(.{' + (hex.length/3) + '})', 'g'));

  for(var i = 0; i < rgb.length; i++){
    rgb[i] = parseInt(rgb[i], 16);
    if(opts.percent){
      rgb[i] = Math.round(Math.round(rgb[i] + (255 * opts.percent)));
      if(rgb[i] < 0) rgb[i] = 0;
      if(rgb[i] > 255) rgb[i] = 255;
    }
  }

  if(opts.alpha) return 'rgba(' + rgb.join(',') + ',' + opts.alpha + ')';
  if(opts.format === 'hex') return "#" +
    ("0" + parseInt(rgb[0],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2);
  return 'rgb(' + rgb.join(',') + ')';
}

fucss.generateColor = function(hex, modifier){

  var c = hex.replace('#', '');
  var mv = modifier.substring(1, modifier.length);
  if(c && c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  if(c && c.length === 2) c = c[0] + c[1] + c[0] + c[1] + c[0] + c[1];

  //console.log('generateColor', c, modifier);

  switch(modifier[0]){
    case 'a':
    case 'alpha':
      return hex2rgb(c, { alpha: '0.' + mv });
    case 'l':
    case 'light':
      return hex2rgb(c, { percent: mv * 0.01, format: 'hex'});
    case 'd':
    case 'dark':
      return hex2rgb(c, { percent: (mv * -1) * 0.01, format: 'hex' });
  }

  return hex;
}

//---------- color section ENDS


fucss.harvestClassesFromHtml = function(html){
  var myRegexp = (/class="(.*?)"/gi);
  var myArray;
  var allHarvestedClassNames = [];

  while ((myArray = myRegexp.exec(html)) !== null) {
    var harvestedClassNames = myArray[0].split('"')[1].split(' ');
    allHarvestedClassNames = allHarvestedClassNames.concat(harvestedClassNames);
  }

  return allHarvestedClassNames.filter (function (v, i, a) { return a.indexOf (v) == i });
}

fucss.harvestClassesFromRiot = function(riot){

  var myRegexp = (/class="(.*?)"/gi);
  var myRegexp2 = (/\'(.*?)\\'/gi)
  var myArray, myArray2;
  var allHarvestedClassNames = [];

  while ((myArray = myRegexp.exec(riot)) !== null) {
    if(myArray[0].indexOf("\'") === -1){
      //myArray[0].split('"')[1].split(' ')
      allHarvestedClassNames = allHarvestedClassNames.concat(myArray[1].split(' '));
    } else {
      while ((myArray2 = myRegexp2.exec(myArray[0])) !== null) {
        allHarvestedClassNames = allHarvestedClassNames.concat(myArray2[1].split(' '));
      }
    }
  }

  return allHarvestedClassNames.filter (function (v, i, a) { return a.indexOf (v) == i });
}

fucss.harvestClassesFromJsx = function(jsx){
  var ptrn = (/(className=\"(.*?)\")|(classNames\(\{([\S\s]*?)\}\))/ig);
  var arr;
  var allHarvestedClassNames = [];
  var cl;
  while ((arr = ptrn.exec(jsx))) {
    if(!arr) return;
    //gets all className class list
    if(arr[2]){
      cl = arr[2].split(' ');
      if(cl){
        allHarvestedClassNames = allHarvestedClassNames.concat(cl);
      }
    }
    //gets all classNames library class list
    else if(arr[4]){
      var classNamesList = arr[4].replace(/\r\n|\n|\r/gm, '').split(',');
      if(classNamesList && classNamesList.length){
        classNamesList.forEach(function(cl){
          if(!cl) return;
          cl = cl.split(':').shift();
          if(!cl) return;
          cl = cl.split("'");
          if(!cl || cl && cl.length < 2) return;
          cl = cl[1] && !!cl[1].length && cl[1].split(' ');
          if(!cl || cl && !cl.length) return;

          allHarvestedClassNames = allHarvestedClassNames.concat(cl);
        });
      }
    }
  }

  return allHarvestedClassNames.filter (function (v, i, a) { return a.indexOf (v) == i });
}

fucss.generateGlobalExtras = function(){
  var globalExtras = {
    "body": 'margin: 0; text-align: center; border-width: 0;\
              font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;\
              -webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;letter-spacing: 0.02em;',
    "*":    'margin: 0 auto; outline: 0; padding: 0; box-sizing: border-box; border-style: solid; border-width: 0; vertical-align: baseline;',
    // ".dp\\:flx > *": 'margin: 0;',
    "a":    'text-decoration: none; color: inherit;',
    "a, span, img, button, i, label": 'display: inline-block; vertical-align: middle;',
    "button, a, i, label": 'cursor: pointer; font-style: normal;',
    "input, button, select, option, textarea": 'font-size: 100%; font-family: inherit;',
    "::-moz-selection": 'background: ' + fucss.colors.prim + '; color: ' + fucss.colors.white + ';',
    "::selection": 'background: ' + fucss.colors.prim + '; color: ' + fucss.colors.white + ';',

    "[contenteditable]": 'cursor: text',
    "[contenteditable]:empty:before" : 'content: attr(placeholder); opacity: 0.5; display: block;',
  }
  !!window.fucssGlobalExtras && Object.assign(globalExtras, window.fucssGlobalExtras);

  var cssString = '';
  for(var key in globalExtras){
    cssString += (key + '{' + globalExtras[key] + '}\n');
  }
  return cssString;
};

fucss.generateExtras = function(){
  var extras = {
    'fux-bb':       'box-sizing: border-box;',
    'fux-grd':      'background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )',
    'fux-clear':    'overflow: hidden;',
    'fux-fadeIn':   'animation-name: fadeIn;animation-iteration-count: 1;\
                      animation-timing-function: ease-in;animation-duration: 0.2s;opacity: 1;',
    'fux-spinner':  'position: absolute; top: calc(50% - 25px); left: calc(50% - 25px); width: 50px; height: 50px; border: 3px solid #fff;\
      			          border-radius: 50%; border-top-color: ' + fucss.colors.sec + '; -webkit-animation: spin 0.75s ease-in-out infinite;',
    'fux-boxsh':    'box-shadow: 0 1px 2px rgba(0,0,0,.1)',
    'fux-trans':    'transition: all .3s ease;',
    'fux-scale':    'transform: scale(1.05);',
  }
  !!window.fucssExtras && Object.assign(extras, window.fucssExtras);

  var cssString = '';
  for(var key in extras){
    cssString += ('.' + key + '{' + extras[key] + '}\n');
  }
  return cssString;
};

// aninamtion loader
fucss.generateAnimations = function(){
  var loader = {};
  loader['@keyframes spin'] = 'to { -webkit-transform: rotate(360deg); }';
  loader['@-webkit-keyframes spin'] = 'to { -webkit-transform: rotate(360deg); }';

  loader['@keyframes fadeIn'] = 'from {opacity: 0.3;} to {opacity: 1;}';
  loader['@-webkit-keyframes fadeIn'] = 'from {opacity: 0.3;}to {opacity: 1;}';

  loader['@keyframes fadeOut'] = 'from {opacity: 1;} to {opacity: 0.5;}';

  var cssString = '';
  for(var key in loader){
    cssString += (key + '{'+ loader[key] +'}\n');
  }
  return cssString;
}
