import { GET_MOVIES, GET_DETAILS, ADD_FAVOURITES, REMOVE_FAVOURITES } from './actions';

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: action.payload.Search
              };
        case GET_DETAILS:
              return {
                ...state,
                movieDetail: action.payload
              }
        case ADD_FAVOURITES:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(m => m.id !== action.payload.id).concat(action.payload)
            }
        case REMOVE_FAVOURITES:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(m => m.id !== action.payload)
            }
        default:
            return state;
    }
}