import swal from 'sweetalert';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_DETAILS = 'GET_DETAILS';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';

export function getMovies(movie) {
    return function(dispatch) {
        return fetch("https://www.omdbapi.com/?apikey=20dac387&s=" + movie)
            .then(response => response.json())
            .then((json) => { 
                if(json.Response !== "False") {
                    dispatch({ type: GET_MOVIES, payload: json });
                } else {
                    swal("Movie not found")
                }
                
        });
    }
}

export function getMovieDetails(id) {
    return function(dispatch) {
        return fetch("https://www.omdbapi.com/?apikey=20dac387&i=" + id)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_DETAILS, payload: json });
      });
    }
}

export function addMovieFavourites(movie) {
    return {
        type: ADD_FAVOURITES,
        payload: movie
    }
}

export function removeMovieFavourites(movie) {
    return {
        type: REMOVE_FAVOURITES,
        payload: movie
    }
}