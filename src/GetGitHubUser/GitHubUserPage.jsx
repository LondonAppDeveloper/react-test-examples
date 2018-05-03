/** Container */

import React, { Component } from 'react';

import GetGitHubUserForm from './GetGitHubUserForm';
import GitHubUser from './GitHubUser';


class GitHubUserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      gitHubUser: {},
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  onChange(e, val) {
    this.setState({[e.target.name]: val});
  }

  getUser() {
    this.setState({isLoading: true});
    return fetch('https://api.github.com/users/' + this.state.username)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({gitHubUser: data, isLoading: false});
      });
  }

  render() {
    return (
      <div>
        <GetGitHubUserForm
          onClick={this.getUser}
          onChange={this.onChange}
          username={this.state.username}
        />
        <GitHubUser
          user={this.state.gitHubUser}
          loading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default GitHubUserPage;
