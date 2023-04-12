import { addFav, removeFav } from "./actions"

const initialState = {
    myFavorites: []
}

const reducer = (state= initialState, action) => {
    switch(action.type) {

        case addFav:
            return {
                ...state,
                myFavorites: [...state, action.payload]
            }

        case removeFav:
            let filterdFav = state.myFavorites.filter(favorito => favorito.id != action.payload)
            return {
                ...state,
                myFavorites: filterdFav
            }

        default:
            return {...state}
    }
}

export default reducer;