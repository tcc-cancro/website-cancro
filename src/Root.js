import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import configureStore from "./configureStore";

const store = configureStore();

function Root() {
    return (
        <Provider store={store}>
            <Router basename='/website-cancro'>
                <App />
            </Router>
        </Provider>
    );
} 

export default Root;