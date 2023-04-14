import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, {type, payload} ) => {
    switch(type) {

        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, payload],
                allCharactersFav: [...state.allCharactersFav, payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }

        case FILTER:
            const filterFav = state.allCharactersFav.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters'
                    ? [...state.allCharactersFav]
                    : filterFav
            }
        
        case ORDER:
            const copyAllCharacters = [...state.allCharactersFav];
            // if(payload === 'A') {
            //     copyAllCharacters.sort((a, b) => a - b);
            // }
            // if (payload === 'D') {
            //     copyAllCharacters.sort((a, b) => b - a);
            // }

             return {
                ...state,
                myFavorites: 
                    payload === 'A'
                    ? copyAllCharacters.sort((a, b) => a.id - b.id)  // id from each character we want to order !
                    : copyAllCharacters.sort((a, b) => b.id - a.id)  // id from each character we want to order !

             }

        default:
            return {...state}
    }
}

export default reducer;