import React from 'react';

export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            flex: "1 1 300px",
            margin: "1rem 0 2rem 1rem",
            "max-width": "300px"
        };
    }

    render() {
        return(
            <div style={this.style}>
                <div>
                    <img src={this.props.attributes.poster} alt=""/>
                </div>
                <div>
                    <div>{this.props.attributes.show_title}</div>
                    <div>{this.props.attributes.rating}</div>
                    <div>{this.props.attributes.category}</div>
                    <div>{this.props.attributes.release_year}</div>
                    <div>{this.props.attributes.runtime}</div>
                    <div>{this.props.attributes.summary}</div>
                    <div>{this.props.attributes.director}</div>
                    <div>{this.props.attributes.show_cast}</div>
                </div>
            </div>
        );
    }
}