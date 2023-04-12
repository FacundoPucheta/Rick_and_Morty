// import { addFav, removeFav } from "./actions"
import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, {type, payload} ) => {
    switch(type) {

        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }

        case REMOVE_FAV:
            let filterdFav = state.myFavorites.filter(favorito => favorito.id !== payload)
            return {
                ...state,
                myFavorites: filterdFav
            }

        default:
            return {...state}
    }
}

export default reducer;