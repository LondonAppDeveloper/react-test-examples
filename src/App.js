import React, { Component } from 'react';
import './App.css';

import GitHubUserPage from './GetGitHubUser/GitHubUserPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <GitHubUserPage />
      </div>
    );
  }
}

export default App;
