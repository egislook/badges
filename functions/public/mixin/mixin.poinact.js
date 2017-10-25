function poinactMixin(actions, stores){
  console.log('init poinactMixin');
  const ward = riot.observable();
  
  ward.on('SET_ROUTE', (route) => console.log('SET_ROUTE', route));
  
  
  return {
    init: function(){

      // this.POINACT = (actionName, payload, cb) => {
      //   let action = null;

      //   for(let storeName in stores){
      //     if(typeof stores[storeName][actionName] === 'function'){
      //       action = stores[storeName][actionName];
      //       break;
      //     }
      //   }
      //   console.log(action);
      // }
      
      this.WARD = ward;
      
      console.log('TADAM', this.WARD);
      
      this.POINACT = (actionName, payload, cb) => 
        (e) => console.log(actionName, payload, e, cb);
    }
  }
}

if(typeof module !== 'object')
  riot.mixin('poinact', poinactMixin());
