import React from "react";
import MovieList from "./movie-list";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class ResultWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MovieList result={this.props.detailedpage ? this.props.result.slice(1) : this.props.result}
                       itemnotfound={this.props.itemnotfound}/>
        );

    }
}