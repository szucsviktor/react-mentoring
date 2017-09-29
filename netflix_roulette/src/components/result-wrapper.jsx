import React from "react";
import MovieList from "./movie-list";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default class ResultWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.removeItemFromMovieList = this.removeItemFromMovieList.bind(this);
    }

    removeItemFromMovieList(movieId) {
        return this.props.result.filter(element => element.show_title !== movieId);
    }

    render() {
        return (
            <Switch>
                <Route path="/item/:movieId"
                       render={(props) => (
                          <div>
                            <MovieList {...props} result={this.removeItemFromMovieList(this.props.match.params.movieId)} />
                          </div>
                       )}
                />
                <Route path="/"
                   render={(props) => (
                       <div>
                        <MovieList {...props} result={this.props.result} />
                       </div>
                   )}
                />
            </Switch>
        );
    }
}