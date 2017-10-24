import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { updateMovieList } from '../actions';


const App = () => {
    const mapStateToProps = state => {
        return {
            movies: getVisibleTodos(state.todos, state.visibilityFilter)
        }
    }
}