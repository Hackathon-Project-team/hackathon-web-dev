import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Form from "./components/Form"
import React, { useState } from "react"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (
    <>
      <Header />
      <Router>
      <Switch>
          <Route exact path="/">
          <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
          
          </Route>
          <Route exact path = "/admin">
            <Form/>
          </Route>
          
        </Switch>
      </Router>

      
          




      
    </>
  );
}

export default App;
