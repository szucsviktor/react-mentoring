import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import AppComponent from "./components/app-container";
import AppContainer from "./components/appContainer";
import movieApp from "./reducers";

let store = createStore();

ReactDOM.render(
    <Provider store={store}>
        //<AppComponent />
        <App />
    </Provider>,
    document.querySelector("#root")
);