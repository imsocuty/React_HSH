
import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

import './App.css';
 
import Main from "./container/Main";
import Home from "./container/Home";
import Viewer from "./container/Viewer";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="" component={Main} />
                        <Route path="/Home" component={Home} />
                        <Route path="/viewer" component={Viewer} />
                    </Switch>
                </div> 
            </Router>
        );
    }
}


export default App;