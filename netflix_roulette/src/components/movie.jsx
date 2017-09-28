import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            container: {
                // flex: "1 1 300px",
                margin: "2rem",
                minWidth: "350px"
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
                    <Link to={{ pathname: `/item/${this.props.movie.show_id}`}}>
                        <img src={this.props.movie.poster} alt=""/>
                    </Link>
                </div>
                <div style={this.style.movieShortInfoContainer}>
                    <div>{this.props.movie.show_title}</div>
                    <div>{this.props.movie.release_year}</div>
                    <div>{this.props.movie.category}</div>
                </div>
            </div>
        );
    }
}