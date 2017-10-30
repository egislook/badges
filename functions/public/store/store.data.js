function storeData(initState){
  
  return {
    name:       'data',
    state:      initState,
    actions:    new Actions(),
  };
  
  function Actions(){
    return {
      'SET_DATA': function(something, cb){ 
        console.log(something);
        //this.set({ something })
      }
    }
  }
}