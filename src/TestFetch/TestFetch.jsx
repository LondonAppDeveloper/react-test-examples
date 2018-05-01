import React, { Component } from 'react';


class TestFetch extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isLoading: true});
    return fetch('https://api.github.com/users/londonappdev')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({isLoading: false})
      });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default TestFetch;
