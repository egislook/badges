function Riothing(data){
  const self = this;
  
  riot.observable(this);
  
  this.storeNames = [];
  this.stores = {};
  this.state = {};
  
  this.riothingStore = function riothingStore(initState = {}, actions = {}){
    this.state = initState;
    this.actions = {};
    this.actionNames = [];
    
    // Parent Actions
    this.act = self.act;
    this.trigger = self.trigger;
    
    // Main methods
    this.set = (object = {}) => 
      Object.assign(this.state, object)
      
    this.get = (key) => {
      return key ? key.split('.').reduce((o,i) => o[i], this.state) : this.state;
    }
    
    // Initiation
    _setActions.bind(this)(actions);
      
    function _setActions(actions){
      this.actionNames = Object.keys(actions);
      
      this.actionNames.some((actionName) => {
        this.actions[actionName] = actions[actionName].bind(this);
      });
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
    
    return action(payload, cb);
  }
  
  //this.on('*', this.act);
  
  this.setStore = (store, state, actions) => {
    if(typeof store === 'object'){
      state   = store.state   || {};
      actions = store.actions || {};
      store   = store.name    || 'noname';
    }
    
    this.storeNames.push(store);
    this.stores[store] = new this.riothingStore(state, actions);
    //console.log('setStore', { name: store, state, actions, store: this.stores[store] });
  }
  
  this.getStore = function(storeName){
    return this.stores[storeName];
  }
  
  this.store = this.getStore;
  
  
  //Initiation
  this.mixin = (riothing) => {
    console.log('in riot tag:', 'this.mixin(\'riothing\')', 'methods:', ['act', 'track']);
    return {
      init: function(){
        this.SERVER = typeof module === 'object';
        this.act = riothing.act.bind(riothing);
        this.track = riothing.on.bind(riothing);
        this.store = riothing.getStore.bind(riothing);
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
        //client initiation
        return this.setStore(parent[store]())
      });
    }
    
    if(data.state){
      if(typeof data.state === 'object')
        this.state = data.state;
      if(typeof data.state === 'string' && typeof module !== 'object')
        fetch(data.state)
          .then(res => res.json())
          .then(json => {
            console.log(json);
            this.state = json;
          });
    }
  }
    
  this.init = () => {
    
    //init mixin
    riot.mixin('riothing', this.mixin(this));
    //init data
    this.initData(data);
    
    //INIT ONLY CLIENT FROM HERE
    if(typeof module === 'object')
      return;
    
    //init route action
    route((page) => {
      let query = new URLSearchParams(window.location.search);
      this.act('SET_ROUTE', page, query.get('splash'));
      route(this.store('routes').get('route.link'), this.store('routes').get('meta.title'));
    });

    route.base('/');
    route.start(1);
    
    riot.mount('app');
  }
  
  this.init();
}