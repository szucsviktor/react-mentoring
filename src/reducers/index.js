import { combineReducers } from 'redux';

const movies = (state = [], action) => {
    switch (action.type) {
        case "RECEIVE_MOVIE":
            console.log("state from reducer is", action.movieList);
            return action.movieList && (action.movieList.length > 0) && action.movieList;
        default:
            return state;
    }
};

const sorter = (state = "TITLE", action) => {
    switch (action.type) {
        case "SORT_BY":
            return action.filter;
        default:
            return state;
    }
};

const movieApp = combineReducers({
    movies,
    sorter
});

export { movies, sorter };

export default movieApp;


