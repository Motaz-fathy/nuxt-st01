import {combineReducers} from 'redux'
import {LoginR , GetUserReducer} from "./UserReducer"
import {TodoReducer} from "./TodosReducer"
export const Reducers = combineReducers({
    LoginR ,
    TodoReducer,
    GetUserReducer
})
