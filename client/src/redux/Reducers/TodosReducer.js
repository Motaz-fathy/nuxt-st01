import * as actionTypes from "../Actions/Types";


  export const TodoReducer = (state = [], action) => {

    switch (action.type) {
      case actionTypes.TODOS_SUCCESS:
        return action.payload

        case actionTypes.ADD_TODO_SUCCESS:
            return [ ...state , action.payload]

        case actionTypes.UPDATE_TODO_SUCCESS:  
              return state.map(todo => (
                  todo.id === action.payload.id ? { ...todo, data: action.payload.data } : todo
              ))
        case actionTypes.DELETE_TODO_SUCCESS:
            return state.filter(todo => todo.id !== action.payload.id) ;
        
        default: 
            return state;
    }
}