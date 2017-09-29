import React from "react";
import Search from "./search";
import MovieDetails from "./movie-details";
import HeaderTitleBar from "./header-title-bar";
import HeaderResultBar from "./header-result-bar";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default class HeaderWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieSearch: false
        };
    }

    render() {
        console.log("props", this.props);
        if (this.props.result.length === 0 && this.props.match.params.movieId && !this.state.movieSearch) {
            this.props.searchMovie("title", this.props.match.params.movieId);
            this.setState({movieSearch: true});
        }
        return (
            <div>
                <HeaderTitleBar />
                <Switch>
                    <Route exact path="/search/:searchBy/:searchQuery"
                           render={props =>
                               <Search {...props} searchMovie={this.props.searchMovie} />
                           }
                    />
                    <Route exact path="/"
                           render={props =>
                               <Search {...props} searchMovie={this.props.searchMovie} />
                           }
                    />
                    <Route path="/item/:movieId"
                        render={props =>
                            <MovieDetails {...props} searchMovie={this.props.searchMovie} getMovie={this.props.getMovie} />
                        }
                    />
                </Switch>
                <HeaderResultBar />
            </div>
        );
    }
}