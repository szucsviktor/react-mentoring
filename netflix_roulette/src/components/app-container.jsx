import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import HeaderWrapper from "./header-wrapper";
import FooterWrapper from "./footer-wrapper";
import ResultWrapper from "./result-wrapper";

export default class AppComponent extends React.Component {

    constructor(props) {
        super(props);

        this.updateResult = this.updateResult.bind(this);

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

    render() {
        return (
        <Router>
            <Route path="*"
                   render={(props) => (
                    <div style={this.style}>
                       <HeaderWrapper {...props} result={this.state.result} updateResult={this.updateResult} />
                       <ResultWrapper {...props} result={this.state.result} updateResult={this.updateResult} />
                       <FooterWrapper {...props} result={this.state.result} updateResult={this.updateResult} />
                    </div>
                   )}
            />
        </Router>
        );
    }
}
