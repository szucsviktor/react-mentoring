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
        // let content;
        // if (this.props.detailedpage) {
        //     content = (
        //         <MovieDetails attributes={this.props.result[0]}/>
        //     )
        // } else {
        //     content = (
        //         <Search />
        //     )
        // }
        // return (
        //     <div>
        //         <HeaderTitleBar detailedpage={this.props.detailedpage}/>
        //         {content}
        //         <HeaderResultBar detailedpage={this.props.detailedpage} attributes={this.props.detailedpage ? this.props.result[0] : this.props.result} itemnotfound={this.props.itemnotfound} />
        //     </div>
        // );
        return (
            <div>
                <HeaderTitleBar detailedpage={this.props.detailedpage}/>
                <Router>
                    <Switch>
                        <Route path="/item:id" component={MovieDetails} />
                        <Route path="/" component={Search} />
                    </Switch>
                </Router>
                <HeaderResultBar detailedpage={this.props.detailedpage} attributes={this.props.detailedpage ? this.props.result[0] : this.props.result} itemnotfound={this.props.itemnotfound} />
            </div>
        );
    }
}