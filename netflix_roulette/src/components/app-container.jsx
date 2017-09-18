import React from 'react';
import Search from './search';
import MovieList from './movie-list';
import MovieDetails from './movie-details';
import resultFromNetflix from '../result';


let isDetailedPage = /\item/.test(location.pathname);

export default class AppComponent extends React.Component {

    constructor(props) {
        super(props);
        this.style = {
            width: "100%"
        };

    }

    render () {
        if(isDetailedPage){
            return (
                <div style={this.style}>
                    <Search />
                    <MovieDetails result={resultFromNetflix} />
                </div>
            );
        } else {
            return(
                <div style={this.style}>
                    <Search />
                    <MovieList result={resultFromNetflix} />
                </div>
            );
        }
    }
}
