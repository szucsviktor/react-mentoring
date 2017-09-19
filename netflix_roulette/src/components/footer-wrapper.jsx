import React from "react";

export default class FooterWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            container: {
                height: "50px",
                color: "#D4274E",
                fontWeight: "bold"
            }
        };
    }

    render() {
        return (
            <div style={this.style.container}>
                netflixroulette
            </div>
        );
    }
}