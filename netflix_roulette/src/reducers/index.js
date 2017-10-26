import { combineReducers } from 'redux';

const movies = (state=[], action) => {
    switch (action.type) {
        case "RECEIVE_MOVIE":
            return [
                ...state
            ];
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

export default movieApp;


