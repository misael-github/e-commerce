import { REGISTERED, GET_STORES, LOGGED, GET_MOVIMIENTOS } from '../constants/userConstants'

const initialState = {
    user: {},
    stores: [],
    items: [],
    registered: false,
    loged: false,
    movimientos: [],
    storeSelected: ''
}

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