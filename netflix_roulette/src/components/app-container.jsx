import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import HeaderWrapper from "./header-wrapper";
import FooterWrapper from "./footer-wrapper";
import ResultWrapper from "./result-wrapper";

export default class AppComponent extends React.Component {

    constructor(props) {
        super(props);

        this.updateResult = this.updateResult.bind(this);
        this.getMovie = this.getMovie.bind(this);
        this.searchMovie = this.searchMovie.bind(this);

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
            return (element.show_title === movieId)
        })[0];
        return movie;
    }

    searchMovie(searchBy, searchValue) {
        const netflix_url = "https://netflixroulette.net/api/api.php";
        let params = {};
        params[searchBy] = searchValue;
        axios.get(netflix_url, {
            params: params
        }).then((result) => {
            this.updateResult(result.data);
        }).catch(() => {
            this.updateResult([]);
        });
    }

    render() {
        return (

        <Router>
            <Switch>
                <Route path="/item/:movieId"
                       render={(props) => (
                           <div style={this.style}>
                               <HeaderWrapper {...props} result={this.state.result} updateResult={this.updateResult} getMovie={this.getMovie} searchMovie={this.searchMovie} />
                               <ResultWrapper {...props} result={this.state.result} updateResult={this.updateResult} getMovie={this.getMovie} searchMovie={this.searchMovie} />
                               <FooterWrapper {...props} result={this.state.result} updateResult={this.updateResult} getMovie={this.getMovie} searchMovie={this.searchMovie} />
                           </div>
                       )}
                />
                <Route path="/"
                       render={(props) => (
                        <div style={this.style}>
                           <HeaderWrapper {...props} result={this.state.result} updateResult={this.updateResult} getMovie={this.getMovie} searchMovie={this.searchMovie} />
                           <ResultWrapper {...props} result={this.state.result} updateResult={this.updateResult} getMovie={this.getMovie} searchMovie={this.searchMovie} />
                           <FooterWrapper {...props} result={this.state.result} updateResult={this.updateResult} getMovie={this.getMovie} searchMovie={this.searchMovie} />
                        </div>
                       )}
                />
            </Switch>
        </Router>
        );
    }
}
