import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Main from "./container/Main";
import About from "./container/About";
import Skill from "./container/Skill";
import Project from "./container/Project";
import Contact from "./container/Contact";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/About" component={About} />
                        <Route path="/skill" component={Skill} />
                        <Route path="/Project" component={Project} />
                        <Route path="/Contact" component={Contact} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;