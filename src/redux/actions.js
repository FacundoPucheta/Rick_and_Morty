import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-types';

export const addFav = (character) => {
    return {type: ADD_FAV, payload: character}
};

export const removeFav = (id) => {
    return {type: REMOVE_FAV, payload: id}
};

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
};

export const orderCards = (order) => {
    return {ORDER, payload: order}
};

// export const getCharacters = () => {
//     return function(dispatch) {
//         fetch(asiuaseinaseonasoenoaseoasieoiashtoiasjroasoirjaosirjoirs) // aca va la url
//         .then(response => response.json())
//         .then(data => dispatch({type:GET_CHARACTERS, payload: data.results}))
//     }
// }