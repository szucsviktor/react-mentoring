import React from 'react';
import MovieList from './movie-list';

export default class ResultWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <MovieList result={this.props.detailedpage ? this.props.result.slice(1) : this.props.result} itemnotfound={this.props.itemnotfound} />
        );

    }
}