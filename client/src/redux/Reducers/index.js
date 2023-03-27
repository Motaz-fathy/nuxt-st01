import {combineReducers} from 'redux'
import {LoginR} from "./UserReducer"
import {GetTodos} from "./TodosReducer"
export const Reducers = combineReducers({
    LoginR ,
    GetTodos
})
