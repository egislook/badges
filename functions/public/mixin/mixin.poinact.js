function poinactMixin(actions, stores){
  console.log('init poinactMixin');
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
      
      this.POINACT = (actionName, payload, cb) => 
        (e) => __ACTIONS[actionName](payload, e, cb);
    }
  }
}

if(typeof module !== 'object')
  riot.mixin('poinact', poinactMixin(__ACTIONS, {}));
