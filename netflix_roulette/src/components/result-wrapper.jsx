import React from "react";
import MovieList from "./movie-list";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class ResultWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Route path="/"
               render={(props) => (
                   <div>
                    <MovieList {...props} result={this.props.result} />
                   </div>
               )}
            />
        );
    }
}