import React from "react";
import Search from "./search";
import MovieDetails from "./movie-details";
import HeaderTitleBar from "./header-title-bar";
import HeaderResultBar from "./header-result-bar";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default class HeaderWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route path="/" component={HeaderTitleBar} />
                <Route path="/item/:movieId"
                    render={props =>
                        <MovieDetails {...props} updateResult={this.props.updateResult} getMovie={this.props.getMovie} />
                    }
                />
                <Route exact path="/"
                       render={props =>
                           <Search {...props} updateResult={this.props.updateResult} />
                       }
                />
                <Route path="/" component={HeaderResultBar} />
            </div>
        );
    }
}