import React from "react";
import MovieList from "./movie-list";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class ResultWrapper extends React.Component {
    constructor(props) {
        super(props);
        console.log("This is result-wrapper component", this.props.result);
    }

    render() {
        return (
        <Router>
            <Route path="/"
               render={(props) => (
                   <div>
                    <MovieList {...props} result={this.props.result} />
                   </div>
               )}
            />
        </Router>
        );

    }
}