import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlogInput from './components/bloginput';
import SideBar from './components/sidebar';
import BlogOutput from './components/blogoutput';
import { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEntries: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.callAPI = this.callAPI.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  async onSubmit(postData) {
    await console.log(postData);
    await this.setState({
      dataEntries: this.state.dataEntries.concat(postData)
    });
    await console.log(this.state.dataEntries);
    axios.post('http://localhost:9000/blogpost', postData);
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  async componentWillMount() {
    this.callAPI();
    let result = await axios.get('http://localhost:9000/blogpost');
    console.log(result.data);
    this.setState({
      dataEntries: result.data,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BlogInput onSubmit={this.onSubmit}></BlogInput>
          <SideBar></SideBar>
          <BlogOutput data={this.state.dataEntries}></BlogOutput>
          <p>{this.state.apiResponse}</p>
        </header>
      </div>
    );
  }
}

export default App;
