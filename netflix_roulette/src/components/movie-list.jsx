import React from 'react';
import MovieItem from './movie';
export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            display: "flex",
            justifyContent: "flex-start",
            flexFlow: "row wrap"
        };
    }

    render() {
        let content;

        if(this.props.itemnotfound){
            content = (
                <h1>No films found</h1>
            )
        } else {
            content = (
                this.props.result.map((movie) =>
                    <MovieItem attributes={movie} />
                )

            )
        }

        return(
            <div style={this.style}>
                {content}
            </div>
        );
    }
}