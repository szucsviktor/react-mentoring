import axios from "axios";
import Config from "../config";

export const SEARCH_MOVIE = 'SEARCH_MOVIE';
function searchMovie(text) {
    return {
        type: SEARCH_MOVIE,
        text
    }
}

export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
function receiveMovie(movieList) {
    return {
        type: RECEIVE_MOVIE,
        movieList
    }
}

export const fetchMovies = (text) => (dispatch) => {
    const themoviedbUrl = Config.themoviedbUrl;
    let params = {};
        params.api_key = Config.apiKey;
        params.query = text;

        dispatch(searchMovie(text));
        return axios.get(themoviedbUrl, params)
            .then((response) => {
                dispatch(receiveMovie(response));
            });
}