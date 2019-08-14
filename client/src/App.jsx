import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlogPost from './components/blogpost';
import SideBar from './components/sidebar';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEntries: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.callAPI = this.callAPI.bind(this);
  }
  async onSubmit(postData) {
    await console.log(postData);
    await this.setState({
      dataEntries: this.state.dataEntries.concat(postData)
    });
    await console.log(this.state.dataEntries);
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BlogPost onSubmit={this.onSubmit}></BlogPost>
          <SideBar></SideBar>
          <p>{this.state.apiResponse}</p>
        </header>
      </div>
    );
  }
}

export default App;
