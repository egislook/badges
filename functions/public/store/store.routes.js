function storeRoutes(){
  let store = {};
  
  store.name = 'routes';
  
  store.state = {
    page: 'main',
    splash: null,
    routes: [
      { name: 'main', main: true },
      { name: 'todo'}
    ]
  };
  
  store.actions = {
    'SET_ROUTE': function(page, splash){
      let routes = this.get('routes');
      
      let route = routes.filter((route) => route.name === page);
      if(route.length !== 1)
        route = route.filter((route) => route.main);
      
      let routeName = route.length !== 1 ? routes[0].name : route[0].name;
      
      console.log('SET_ROUTE', routeName);
      this.set({ page: routeName, splash });
      this.trigger('ROUTE_STATE', this.get());
      return this.get();
    },
    
    'SET_SOMETHING': function(something, cb){ 
      console.log(something);
      //this.set({ something })
    },
    
    'TRIGGER_UPDATE': function(anno){
      this.trigger('ROUTE_STATE', this.state); 
    }
  }
  
  return store;
}