function storeDefinitions(initState){
  
  return {
    name:       'definitions',
    state:      initState,
    actions:    new Actions(),
    models:     { Lang },
    model:      StateDefinitions,
  };
  
  function Actions(){
    return {
      'GET_DEF': function(value){
        if(value.indexOf(' ') >= 0)
          return value;
        
        //console.log('GET_DEF', this.get('def'), value);
        //console.log('DEFINITION STATE', { lang: this.get('lang'), value });
        return value.indexOf('$def.') === 0
          ? this.get(value.replace('$', ''))
          : this.get('def.' + value) || value;
      },
      
      'SET_LANGUAGE': function(lang){
        lang = lang || !this.SERVER && Cookies.get('lang');
          
        let state = this.set({ lang });
        
        !this.SERVER && Cookies.set('lang', state.lang);
        this.act('SET_TITLE');
        //this.restate(['routes']);
        //console.log(this.store('routes').get());
        
        //console.log('SET_LANGUAGE', lang, state);
        this.trigger('DEFINITIONS_STATE', state);
        return state;
      }
    }
  }
  
  function StateDefinitions(data = {}, prev = {}, def){
    def = def || {
      definitions: {
        en: {"mainTitle": "badges", "mainButton": "say hello"},
        lt: {"mainTitle": "medaliai", "mainButton": "pasakyk labas"}
      }
    };
    
    this.definitions  = data.definitions || prev.definitions || def.definitions;
    this.langs        = getLangs(this.definitions);
    
    this.lang = data.lang || this.langs[0].name;
    this.def  = this.definitions && this.definitions[this.lang];
    
    
    function getLangs(definitions){
      if(!definitions)
        return;
        
      return Object.keys(definitions).map(lang => new Lang(lang));
    }
    
    return this;
  }
  
  function Lang(name, title){
    this.name   = name;
    this.title  = title;
    return this;
  }
}