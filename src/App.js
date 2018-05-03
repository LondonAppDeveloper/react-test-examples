import React, { Component } from 'react';
import './App.css';

import GetGitHubUserPage from './GetGitHubUser/GetGitHubUserPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <GetGitHubUserPage />
      </div>
    );
  }
}

export default App;
