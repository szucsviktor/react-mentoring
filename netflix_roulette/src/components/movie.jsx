import React from "react";

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            container: {
                // flex: "1 1 300px",
                margin: "2rem",
                maxWidth: "300px"
            },
            posterContainer: {
                height: "405px"
            },
            movieShortInfoContainer: {
                marginTop: "1rem"
            }
        };

    }

    render() {
        return (
            <div style={this.style.container}>
                <div style={this.style.posterContainer}>
                    <img src={this.props.attributes.poster} alt=""/>
                </div>
                <div style={this.style.movieShortInfoContainer}>
                    <div>{this.props.attributes.show_title}</div>
                    <div>{this.props.attributes.release_year}</div>
                    <div>{this.props.attributes.category}</div>
                </div>
            </div>
        );
    }
}