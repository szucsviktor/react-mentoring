import React from "react";

export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            container: {
                flex: "1 1 300px",
                margin: "1rem 0 2rem 1rem",
                display: "flex"
            },
            posterContainer: {
                height: "405px"
            },
            movieDetailsContainer: {
                flexBasis: "100%",
                marginLeft: "5rem"
            }
        };

    }

    render() {
        let movie = this.props.getMovie(this.props.match.params.movieId),
            content;

            if (movie) {
                content = (
                    <div style={this.style.container}>
                        <div style={this.style.posterContainer}>
                            <img src={movie.poster} alt=""/>
                        </div>
                        <div style={this.style.movieDetailsContainer}>
                            <div>{movie.show_title}</div>
                            <div>{movie.rating}</div>
                            <div>{movie.category}</div>
                            <div>{movie.release_year}</div>
                            <div>{movie.runtime}</div>
                            <div>{movie.summary}</div>
                            <div>{movie.director}</div>
                            <div>{movie.show_cast}</div>
                        </div>
                    </div>
                )
            } else {
                content = (
                    <div>###############</div>
                )
            }
        return (
            {content}
        );
    }
}