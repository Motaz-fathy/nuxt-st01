import {combineReducers} from 'redux'
import {LoginR} from "./UserReducer"
import {TodoReducer} from "./TodosReducer"
export const Reducers = combineReducers({
    LoginR ,
    TodoReducer
})
