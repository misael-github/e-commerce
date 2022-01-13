import { combineReducers } from 'redux'
import {useReducer} from './userReducer'

// Combino reducers dentro de un reducer global
export const reducers = combineReducers({
    user: useReducer,
    
    
})