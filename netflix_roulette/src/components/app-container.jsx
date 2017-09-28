import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import HeaderWrapper from "./header-wrapper";
import FooterWrapper from "./footer-wrapper";
import ResultWrapper from "./result-wrapper";

export default class AppComponent extends React.Component {

    constructor(props) {
        super(props);

        this.updateResult = this.updateResult.bind(this);
        this.getMovie = this.getMovie.bind(this);

        this.style = {
            width: "100%"
        };

        this.state = {
            result: []
        };

    }

    updateResult(data) {
        let dataType = Object.prototype.toString.call(data);
            if (dataType === "[object Array]") {
                this.setState({result: data});
            } else if (dataType === "[object Object]") {
                let tmpArray = [];
                    tmpArray.push(data);
                    this.setState({result: tmpArray});
            }
    }

    getMovie(movieId){
        let movie = this.state.result.filter((element) => {
            console.log("is match???", (element.show_id === Math.floor(movieId)));
            return (element.show_id === Math.floor(movieId))
        })[0];
        console.log("dfsdfmovie", movie);
        return movie;
    }

    render() {
        return (
        <Router>
            <Route path="/"
                   render={(props) => (
                    <div style={this.style}>
                       <HeaderWrapper {...props} result={this.state.result} updateResult={this.updateResult} getMovie={this.getMovie} />
                       <ResultWrapper {...props} result={this.state.result} updateResult={this.updateResult} getMovie={this.getMovie} />
                       <FooterWrapper {...props} result={this.state.result} updateResult={this.updateResult} getMovie={this.getMovie} />
                    </div>
                   )}
            />
        </Router>
        );
    }
}
