import React from "react";

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

    }

    render() {
        return (
            <div style={this.style}>
                <HeaderWrapper result={resultFromNetflix} detailedpage={isDetailedPage}/>
                <ResultWrapper result={resultFromNetflix} detailedpage={isDetailedPage} itemnotfound={isItemNotFound}/>
                <FooterWrapper detailedpage={isDetailedPage}/>
            </div>
        );
    }
}
