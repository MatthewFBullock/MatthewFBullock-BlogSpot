import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fish from './components/fish';
import BlogPost from './components/blogpost';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEntries: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  async onSubmit(postData) {
    await console.log(postData);
    await this.setState({
      dataEntries: this.state.dataEntries.concat(postData)
    });
    await console.log(this.state.dataEntries);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BlogPost onSubmit={this.onSubmit}></BlogPost>
        </header>
      </div>
    );
  }
}

export default App;
