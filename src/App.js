import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import SearchBoxComponent from "./components/SearchBoxComponent";
import JobsListComponent from "./components/JobsListComponent";

class App extends Component {
  render() {
    return (
      <div className="main">
      	<header>
      		<div className="logo">JOB</div>
      	</header>
      	<main>
      		<div className="container">
						<SearchBoxComponent />
            <JobsListComponent />
      		</div>
      	</main>
      </div>
    );
  }
}

export default App;
