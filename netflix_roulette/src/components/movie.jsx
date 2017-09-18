import React from 'react';

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            width: "300px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexFlow: "row wrap"
        };
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