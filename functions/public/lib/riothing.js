function Riothing(data){
  const self = this;
  
  riot.observable(this);
  
  this.storeNames = [];
  this.stores = {};
  
  this.riothingStore = function riothingStore(initState = {}, actions = {}){
    this.state = {};
    this.actions = {};
    this.actionNames = [];
    
    // Parent Actions
    this.act = self.act;
    this.trigger = self.trigger;
    
    // Main methods
    this.set = (object = {}) => 
      Object.assign(this.state, object)
      
    this.get = (key) => 
      key ? this.state[key] : this.state;
    
    // Initiation
    _setActions.bind(this)(actions);
    _setState.bind(this)(initState);
      
    function _setActions(actions){
      this.actionNames = Object.keys(actions);
      
      this.actionNames.some((actionName) => {
        this.actions[actionName] = actions[actionName].bind(this);
      });
    }
    
    function _setState(initState){
      this.set(initState);
    }
    
    //console.log(this);
  }
  
  this.act = (actionName, payload, cb) => {
    let action;
    this.storeNames.some((storeName) => {
      action = this.stores[storeName].actions[actionName];
      if(action) 
        return true;
    });
    if(!action) 
      return console.warn(`Action "${actionName}" can not be found params "${payload}"`);
    
    action(payload, cb);
  }
  
  //this.on('*', this.act);
  
  this.setStore = (store, state, actions) => {
    if(typeof store === 'object'){
      state   = store.state || {};
      actions = store.actions || {};
      store   = store.name || 'noname';
    }
    
    this.storeNames.push(store);
    console.log('setStore', { name: store, state, actions });
    this.stores[store] = new this.riothingStore(state, actions);
  }
  
  
  
  //Initiation
  this.mixin = (riothing) => {
    return {
      init: function(){
        this.SERVER = typeof module === 'object';
        this.act = riothing.act;
        this.track = riothing.on;
        this.new = riothing.on;
      }
    }
  }
  
  this.initData = (data) => {
    if(!data)
      return;
    
    if(data.stores && data.stores.length){
      data.stores.forEach((store) => {
        //server initiation
        if(typeof module === 'object' || typeof store !== 'string')
          return this.setStore(store);
        
        //client store loader by name
        if(typeof parent[store] !== 'function')
          return setTimeout(() => this.setStore(parent[store]()), 100);
        
        this.setStore(parent[store]());
      });
    }
  }
    
  this.init = () => {
    
    //init mixin
    riot.mixin('riothing', this.mixin(this));
    //init data
    this.initData(data);
    
    //INIT ONLY CLIENT
    if(typeof module === 'object')
      return;
    
    //init route action
    route((page) => {
      let query = new URLSearchParams(window.location.search);
      this.act('SET_ROUTE', page, query.get('splash'));
    });

    route.base('/');
    route.start(1);
  }
  
  this.init();
}

// if(typeof module === 'object'){
//   var riot = require('riot');
//   module.exports = Riothing;
// }

// riothing.setStore('routes', { 
//   page: 'main',
//   splash: null,
//   routes: [
//     { name: 'main', main: true },
//     { name: 'todo'}
//   ]
// }, {
//   'SET_ROUTE': function(page, splash){
    
//     let route = this.get('routes').filter((route) => route.name === page);
//     if(route.length !== 1)
//       route = this.get('routes').filter((route) => route.main);
    
//     console.log('SET_ROUTE', page);
//     this.set({ page: route.name, splash });
//     this.trigger('ROUTE_STATE', this.get());
//   },
//   'SET_SOMETHING': function(something, cb){ 
//     console.log(something);
//     //this.set({ something })
//   },
//   'TRIGGER_UPDATE': function(anno){
//     this.trigger('ROUTE_STATE', this.state); 
//   }
// });