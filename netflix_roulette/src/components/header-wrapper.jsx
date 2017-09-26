import React from "react";
import Search from "./search";
import MovieDetails from "./movie-details";
import HeaderTitleBar from "./header-title-bar";
import HeaderResultBar from "./header-result-bar";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default class HeaderWrapper extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <HeaderTitleBar detailedpage={this.props.detailedpage}/>
                <Router>
                    <Switch>
                        <Route path="/item"
                            render={(props) => (
                            <MovieDetails {...props} attributes={this.props.result[0]} />
                            )}
                        />
                        <Route path="/" component={Search} />
                    </Switch>
                </Router>
                <HeaderResultBar detailedpage={this.props.detailedpage} attributes={this.props.detailedpage ? this.props.result[0] : this.props.result} itemnotfound={this.props.itemnotfound} />
            </div>
        );
    }
}