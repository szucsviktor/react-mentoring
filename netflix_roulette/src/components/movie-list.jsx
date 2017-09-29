import React from "react";
import MovieItem from "./movie";
export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            container: {
                display: "flex",
                justifyContent: "center",
                flexFlow: "row wrap",
                backgroundColor: "#fff",
                // minHeight: "400px",
                alignItems: "flex-start"
            },
            movieItemContainer: {
                // flex: "1 0 auto"
            }
        };
    }

    render() {
        let content;

        if (this.props.result && this.props.result.length === 0) {
            content = (
                <h1>No films found</h1>
            )
        } else {
            content = (
                this.props.result.map((movie) =>
                    <div style={this.style.movieItemContainer}>
                        <MovieItem movie={movie}/>
                    </div>
                )
            )
        }

        return (
            <div style={this.style.container}>
                {content}
            </div>
        );
    }
}