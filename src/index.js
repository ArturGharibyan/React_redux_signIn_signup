import React from "react";
import ReactDom from 'react-dom';
import App from "./App"
import "./App.css"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import root from "./store/root"
const store = createStore(root)

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('d1')
)