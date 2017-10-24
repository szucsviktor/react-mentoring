import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { updateMovieList } from '../actions';
import Config from '../config';
import Search from './searchMovieModule';


class searchMovieContainer extends React.Component {

    constructor(props) {
        super(props);
    };
}

    const searchForMovie = (text) => {
        const netflix_url = "https://api.themoviedb.org/3/search/movie";
        let params = {};
            params.api_key = Config.apiKey;
            params.query = text;
            return axios.get(netflix_url, {
                params: params
            });
    };

    const mapStateToProps = state => {
        return {
            movies: state.movies
        }
    };

    const mapDispatchToProps = dispatch => {
        return {
            onMovieSearch: (text) => {
                searchForMovie(text).then(response => {
                    console.log(response);
                    dispatch(updateMovieList(response.results));
                });
            }
        }
    };

    export default searchMovieContainer = connect(mapStateToProps,mapDispatchToProps)(Search);