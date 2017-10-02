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
            },
            titleAndRatingContainer: {
                display: "flex"
            },
            yearAndRuntimeContainer: {
                display: "flex",
                alignItems: "center",
                color: "rgba(255, 255, 255, 0.8)",
                margin: "10px 0 30px 0"
            },
            movieTitle: {
                fontSize: "2rem",
                color: "#e91e63"
            },
            rating: {
                border: "1px solid #8bc34a",
                borderRadius: "50%",
                padding: "10px",
                marginLeft: "50px",
                color: "#8bc34a"
            },
            category: {
                color: "rgba(255, 255, 255, 0.7)",
            },
            runtime: {
                marginLeft: "50px"
            },
            description: {
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "50%"
            },
            director: {
                color: "rgba(255, 255, 255, 0.5)",
                margin: "20px 0 10px 0"
            },
            cast: {
                color: "rgba(255, 255, 255, 0.5)"
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
                            <div style={this.style.titleAndRatingContainer}>
                                <div style={this.style.movieTitle}>{movie.show_title}</div>
                                <div style={this.style.rating}>{movie.rating}</div>
                            </div>
                            <div style={this.style.category}>{movie.category}</div>
                            <div style={this.style.yearAndRuntimeContainer}>
                                <div>{movie.release_year}</div>
                                <div style={this.style.runtime}>{movie.runtime}</div>
                            </div>
                            <div style={this.style.description}>{movie.summary}</div>
                            <div style={this.style.director}>Director: {movie.director}</div>
                            <div style={this.style.cast}>Cast: {movie.show_cast}</div>
                        </div>
                    </div>
                )
            } else {
                content = (
                    <div>Movie details are not found!</div>
                )
            }
        return (
            <div>
            {content}
            </div>
        );
    }
}