// importo la const que cree para no poner strings y que no haya errores de tipeo
import { REGISTERED, GET_STORES, LOGGED, GET_MOVIMIENTOS } from '../constants/userConstants'



// State de reducer  user
const initialState = {
    user: {},
    stores: [],
    items: [],
    registered: false,
    loged: false,
    movimientos: [],
    storeSelected: ''
}

// La data y el type es el que le paso en el dispatch del userActions
export function useReducer(state = initialState, action) {

    switch (action.type) {

        case REGISTERED:
            return {
                ...state,
                user: action.payload,
                registered: true
            }
        case LOGGED:
            return {
                ...state,
                loged: true
            }
        case GET_STORES:
            return {
                ...state,
                stores: action.payload
            }
        case GET_MOVIMIENTOS:
            return {
                ...state,
                movimientos: action.payload
            }
        case 'SET_STORE':
            return {
                ...state,
                storeSelected: action.payload
            }
        case "SET_USER":
            return{
                ...state,
                user:action.payload
            }    
        default:
            return state;

    }
}