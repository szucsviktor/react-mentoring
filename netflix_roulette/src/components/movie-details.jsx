import React from 'react';

export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.style = {};
    }

    render() {
        return(
            <div style={this.style}>
                <img src={this.props.poster} alt=""/>
                <div>{this.props.title}</div>
                <div>{this.props.year}</div>
                <div>{this.props.category}</div>
            </div>
        );
    }
}