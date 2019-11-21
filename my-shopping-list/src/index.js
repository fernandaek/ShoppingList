import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ShoppingList from './Components/ShoppingList';
import "./Style/ShoppingList.css"

var destination = document.querySelector("#root")

ReactDOM.render(
    <div className="container">
        <ShoppingList />
    </div>, destination
);


