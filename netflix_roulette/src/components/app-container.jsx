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
            result: resultFromNetflix
        };
    }

    render() {
        return (
            <div style={this.style}>
                <HeaderWrapper result={this.state.result} detailedpage={isDetailedPage} itemnotfound={isItemNotFound}/>
                <ResultWrapper result={this.state.result} detailedpage={isDetailedPage} itemnotfound={isItemNotFound}/>
                <FooterWrapper detailedpage={isDetailedPage}/>
            </div>

        );
    }
}
