import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import SearchBox from "./components/SearchBox";
import JobsList from "./components/JobsList";

class App extends Component {
  render() {
    return (
      <div className="main">
        <header>
          <div className="logo">JOB</div>
        </header>
        <main>
          <div className="container">
            <SearchBox />
            <JobsList />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
