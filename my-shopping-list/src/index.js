import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ShoppingList from './Components/ShoppingList';

var destination = document.querySelector("#root")

ReactDOM.render(
    <div style={{margin: "auto", marginTop: "10px"}}>
        <ShoppingList />
    </div>, destination
);


