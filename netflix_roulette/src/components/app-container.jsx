import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import resultFromNetflix from "../result";
import HeaderWrapper from "./header-wrapper";
import FooterWrapper from "./footer-wrapper";
import ResultWrapper from "./result-wrapper";

let isDetailedPage = /\item$/.test(location.pathname),
    isItemNotFound = /\item-not-found$/.test(location.pathname);

export default class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.style = {
            width: "100%"
        };

        this.state = {
            result: [],
            updateResult: function (data) {
                this.setState({result: data});
            }
        };
    }

    render() {
        return (
        <Router>
            <Route path="*"
                   render={(props) => (
                    <div style={this.style}>
                       <HeaderWrapper {...props} result={this.state.result} updateResult={this.state.updateResult} />
                       <ResultWrapper {...props} result={this.state.result} updateResult={this.state.updateResult} />
                       <FooterWrapper {...props} result={this.state.result} updateResult={this.state.updateResult} />
                    </div>
                   )}
            />
        </Router>
        );
    }
}
