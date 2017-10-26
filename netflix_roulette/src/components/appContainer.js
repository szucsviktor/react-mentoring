import React from "react";
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';


const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchMovie: text => {
            dispatch(fetchMovies(text));
        }
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            formContainer: {
                height: "200px"
            }
        };
    }


    render() {
        let input;
        console.log("#App Component props: ", this.props);
        return (
            <div style={this.style.formContainer}>
                <form
                    onSubmit={ e => {
                        e.preventDefault();
                        this.props.onSearchMovie(input.value);
                    }}
                >
                    <div>
                        <label htmlFor="search-movie">
                            Find your movie
                        </label>
                    </div>
                    <div>
                        <input type="text"
                               id="search-movie"
                               placeholder="Find your movie"
                               ref = {node => {
                                   input = node;
                               }}
                            // onChange={this.handleSeachFieldChange}
                        />
                    </div>
                    <div>
                        <div>

                            <input type="submit"
                                   className=""
                                   value="Search"
                            />
                        </div>
                        <div>
                            <label htmlFor="search-by-title">Title</label>
                            <input type="radio"
                                   id="search-by-title"
                                   name="search-mode"
                                   value="title"
                                // checked={this.state.searchBy === "title"}
                                // onChange={this.handleSearchByChange}
                            />
                            <label htmlFor="search-by-director">Director</label>
                            <input type="radio"
                                   id="search-by-director"
                                   name="search-mode"
                                   value="director"
                                // checked={this.state.searchBy === "director"}
                                // onChange={this.handleSearchByChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;