import React from "react";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default class HeaderTitleBar extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            container: {
                height: "50px",
                color: "#D4274E",
                fontWeight: "bold"
            },
            title: {
                float: "left"
            },
            searchButton: {
                float: "right"
            }

        };

    }

    render() {
        return (
            <Switch>
                <Route path="/item/:movieId"
                       render={(props) =>
                            <div style={this.style.container}>
                                <span style={this.style.title}>netflixroulette</span>
                                <Link style={this.style.searchButton} to="/">Search</Link>
                            </div>
                       }
                />
                <Route path="/"
                    render={(props) =>
                    <div style={this.style.container}>
                        <span>netflixroulette</span>
                    </div>
                    }
                />
            </Switch>
        );
    }
}
