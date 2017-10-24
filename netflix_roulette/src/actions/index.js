export const updateMovieList = movies => {
    return {
        type: "UPDATE_MOVIELIST",
        movies
    }
};

export const sortBy = filter => {
    return {
        type: "SORT_BY",
        filter
    }
};