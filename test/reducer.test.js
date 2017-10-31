import { movies, sorter } from "../src/reducers";

describe("Reducer test", () => {

    it("tracks that movies should return its initial state by default", () =>  {
        expect(movies(undefined, {})).toEqual([]);
    });

    it("tracks that movies should return its initial state if action type does not match", () => {
        let action = {
            type: "UNKNOWN_TYPE"
        };

        expect(movies(undefined, action)).toEqual([]);
    });

    it("tracks that movies should return a non empty array if both action type matches and movieList is not empty", () => {
        let action = {
            type: "RECEIVE_MOVIE",
            movieList: [1,2,3,4,5]
        };

        expect(movies(undefined, action)).toEqual([1,2,3,4,5]);
    });
});