import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fish from './components/fish';
import BlogPost from './components/blogpost';
import {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataEntries: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  async onSubmit(postData){
    await console.log(postData);
    await this.setState({
      dataEntries: this.state.dataEntries.concat(postData)
    });
    await console.log(this.state.dataEntries);
  }
  render(){
    return (
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
          <Fish></Fish>
          <BlogPost onSubmit={this.onSubmit}></BlogPost>
        </header>
      </div>
    );
  }
}

export default App;
