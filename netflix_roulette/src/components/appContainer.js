import React from 'react';
import searchMovieContainer from "./searchMovieContainer";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <searchMovieContainer />
                <h1>This H1 element will be rendered.</h1>
            </div>
        );
    };
}