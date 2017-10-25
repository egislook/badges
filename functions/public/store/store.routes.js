function storeRoutes(initState){
  
  return {
    name:     'routes',
    state:    new RoutesState(initState),
    actions:  new Actions()
  };
  
  function Actions(){
    return {
      'SET_ROUTE': function(page, splash){
        let routes = this.get('routes');
        
        let route = routes.filter((route) => route.name === page);
        if(route.length !== 1)
          route = route.filter((route) => route.main);
        
        let routeName = route.length !== 1 ? routes[0].name : route[0].name;
        
        let state = this.set({ 
          page: routeName, 
          splash, 
          meta: this.get('metas')[routeName],
          route: this.get('routes').filter((route) => route.name === routeName).shift(),
        });
        
        console.log('SET_ROUTE', routeName);
        
        this.trigger('ROUTE_STATE', state);
        return state;
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
  
  function RoutesState(data = {}){
    this.routes = [
      new Route({ name: 'main', main: true }),
      new Route({ name: 'todo'})
    ];
    
    this.metas = {
      main: new Meta(),
      todo: new Meta({ title: 'todo poinout title'})
    };
    
    this.page   = data.page   || 'main';
    this.splash = data.splash || null;
    this.route  = data.route  || this.routes.filter((route) => route.name === this.page).shift();
    this.meta   = data.meta   || this.metas[this.page];
    
    return this;
  }
  
  // Structures
  function Route(data = {}){
    this.name = data.name || 'none';
    this.main = data.main || false;
    this.link = data.link || data.main && '/' || '/' + data.name;
    
    return this;
  }
  
  function Meta(data = {}){
    this.title    = data.title    || 'Poinout app';
    this.desc     = data.desc     || 'Simple app description';
    this.author   = data.author   || 'egis';
    this.image    = data.image    || '';
    this.url      = data.url      || '';
    this.favicon  = data.favicon  || 'favicon.ico';
    
    return this;
  }
}