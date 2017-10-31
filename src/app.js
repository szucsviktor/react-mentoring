import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/appContainer";
import thunkMiddleware from 'redux-thunk';
import movieApp from "./reducers";

let initialState = {
    movies: [],
    filter: "TITLE"
};

let store = createStore(
    movieApp,
    initialState,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);