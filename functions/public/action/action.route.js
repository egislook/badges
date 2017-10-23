  
  if(typeof __ACTIONS !== 'object')
    __ACTIONS = {};
  
  __ACTIONS.setRoute = (payload, e, cb) => {
    e.preventDefault();
    console.log(payload, e);
  }
  
  __ACTIONS.getRoute = (payload, cb) => {
    
  }