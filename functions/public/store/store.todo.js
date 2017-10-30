function storeTodos(initState){
  
  return {
    name:       'todos',
    state:      { todo: initState.todo },
    actions:    new Actions(),
    //models:     { Todo },
    model:      State,
  };
  
  function Actions(){
    return {
      'SET_TODO': function(something, cb){ 
        console.log(something);
        //this.set({ something })
      },
    }
  }
  
  function State(data = {}, prev = {}){
    this.todo = data.todo;
    
    return this;
  }
  
  function Todo(data = {}){
    this.name = data.name || 'none';
    this.main = data.main || false;
    this.link = data.link || this.main && '/' || '/' + this.name;
    this.view = data.view || 'page-' + this.name;
    
    return this;
  }
}