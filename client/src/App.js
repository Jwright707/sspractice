import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./templates/App.css";
import Login from "./components/login";
import Home from "./components/home";
import Error from "./components/error";
import Navbr from "./components/navbar";
import Projects from "./components/projects";
import tradeMark from "./components/trademark";
import attachMents from "./components/attachments";

class App extends Component {
  render() {
    return (
      <div className="background">
        <Navbr />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/projects" component={Projects} />
            <Route path="/attachments" component={attachMents} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
        <tradeMark />
      </div>
    );
  }
}

export default App;
