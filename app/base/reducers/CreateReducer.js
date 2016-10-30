/**
 * Reducer的创建工厂 
 * @param  {[type]} initialState [description]
 * @param  {[type]} handlers     [description]
 * @return {[type]}              [description]
 */
var CreateReducer = function(initialState, handlers) {
  return function(state = initialState, action) {
    if(handlers.hasOwnProperty(action.type)){
      return handlers[action.type](state, action);
    }else{
      return state;
    }
  }
}
export default CreateReducer
