import React from "react";

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
        let content;
        if (this.props.detailedpage) {
            content = (
                <div style={this.style.container}>
                    <span style={this.style.title}>netflixroulette</span>
                    <a style={this.style.searchButton} href="/">Search</a>
                </div>
            )
        } else {
            content = (
                <div style={this.style.container}>
                    <span>netflixroulette</span>
                </div>
            )
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}