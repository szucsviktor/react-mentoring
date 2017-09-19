import React from "react";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="search-movie">
                        Find your movie
                    </label>
                    <input type="text" id="search-movie" placeholder="Find your movie"/>
                    <input type="button" className="" value="Search"/>
                    <label htmlFor="search-by-title">Title</label>
                    <input type="radio" id="search-by-title" name="search-mode" value="title"/>
                    <label htmlFor="search-by-director">Director</label>
                    <input type="radio" id="search-by-director" name="search-mode" value="director"/>
                </form>
            </div>
        );
    }
}