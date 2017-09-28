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
                <HeaderTitleBar detailedpage={this.props.detailedpage}/>
                <Router>
                    <Switch>
                        <Route path="/item/:movieId"
                            render={(props) => (
                            <MovieDetails {...props} updateResult={this.props.updateResult} getMovie={this.props.getMovie} />
                            )}
                        />
                        <Route exact path="/"
                               render={(props) => (
                                   <Search {...props} updateResult={this.props.updateResult} />
                               )}
                        />
                    </Switch>
                </Router>
                <HeaderResultBar detailedpage={this.props.detailedpage}
                                 attributes={this.props.detailedpage ? this.props.result[0] : this.props.result}
                                 itemnotfound={this.props.itemnotfound}
                />
            </div>
        );
    }
}