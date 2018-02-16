function storeRoutes(initState){
  
  return {
    name:       'routes',
    state:      initState,
    actions:    new Actions(),
    models:     { Route, Meta },
    model:      StateRoutes,
  };
  
  function Actions(){
    return {
      'SET_ROUTE': function({ page, query, cookies }){
        let langState = this.act('SET_LANGUAGE', cookies && cookies.lang);
        
        let routes = this.get('routes');
        let route = routes.filter((route) => route.name === page);
        if(route.length !== 1)
          route = route.filter((route) => route.main);
        
        let routeName = route.length !== 1 
          ? routes[0].name 
          : route[0].name;
        
        let state = this.set({
          ready: !this.SERVER,
          page: routeName,
          splash: query && query.splash,
        });
        
        //console.log(state);
        //set client title
          
        console.log('SET_ROUTE', routeName, 'query:', page, query, state);
        
        this.trigger('ROUTE_STATE', state);
        return state;
      },
      
      'SET_TITLE': function(){
        if(!this.SERVER)
          parent.route(parent.location.href.replace(parent.location.origin, ''), this.get('meta.title'));
      },
      
      'SET_SOMETHING': function(something, cb){ 
        console.log(something);
        //this.set({ something })
      },
      
      'TRIGGER_UPDATE': function(anno){
        this.trigger('ROUTE_STATE', this.state); 
      }
    }
  }
  
  function StateRoutes(data = {}, prev = {}, def, act){
    def = def || {
      routes: [
        { main: true, name: 'main' },
        { name: 'todo' }
      ],
      metas: {
        main: { title: 'app main title' },
        todo: { title: 'app todo title' },
      }
    };
    
    this.routes = getRoutes(data.routes || prev.routes || def.routes);
    this.metas  = getMetas(data.metas || prev.metas || def.metas, act);
    
    this.ready  = data.ready  || prev.ready   || false;
    this.page   = data.page   || prev.page    || 'main';
    this.splash = data.splash;
    
    //generated values
    this.route    = this.routes.filter((route) => route.name === this.page).shift();
    this.meta     = this.metas[this.page] || this.metas['main'];
    this.subroute = this.splash && this.routes.filter((subroute) => subroute.name === this.splash).shift();
    
    function getMetas(metas, act){
      metas = Object.assign({}, metas);
      for(let name in metas){
        metas[name] = new Meta(metas[name]);
      }
      return metas;
    }
    
    function getRoutes(routes){
      return routes.slice().map( route => new Route(route));
    }
    
    return this;
  }
  
  function Route(data = {}){
    this.name   = data.name || 'none';
    this.main   = data.main || false;
    this.link   = data.link || this.main && '/' || '/' + this.name;
    this.view   = data.view || 'page-' + this.name;
    this.clean  = data.clean;
    this.test   = '$def.tadam';
    
    return this;
  }
  
  function Meta(data = {}){
    //console.log(data, act, act && act('GET_DEF', data.title));
    //console.log(data.title, data.desc);
    this.title    = data.title || 'Poinout app';
    this.desc     = data.desc  || 'Simple app description';
    this.author   = data.author   || 'egis';
    this.image    = data.image    || '';
    this.url      = data.url      || '';
    this.favicon  = data.favicon  || 'favicon.ico';
    
    return this;
  }
}