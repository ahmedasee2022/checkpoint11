import React from "react";
import "index";
import `bootstrap/dist/css/bootstrap.min.css`;
import `./App.css`;

import AppHeader from "./Appcomponent/header";
import { App } from "./App.1";

import React, { Component } from "react";
import { Fragment } from "react";

function App() {
    return(
        <div className="App">
     <header id="header">
        <AppHeader/>

     </header>

        </div>
    )
};


export class App extends Component {
    render() {
        return (
            <div className="App">
                <Fragment />
            </div>
        );
    }
};


export default App