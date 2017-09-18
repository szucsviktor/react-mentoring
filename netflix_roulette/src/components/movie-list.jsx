import React from 'react';
import MovieItem from './movie';
export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexFlow: "row wrap"
        };
    }

    render() {
        return(
            <div style={this.style}>
                {this.props.result.map((movie) =>
                    <MovieItem key={movie.show_id}
                               title={movie.show_title}
                               poster={movie.poster}
                               year={movie.release_year}
                               category={movie.category}
                    />
                )}
            </div>
        );
    }
}