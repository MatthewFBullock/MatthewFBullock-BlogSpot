import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Fish from './components/fish';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('adds', () => {
  let fish = Fish.add(1, 1);
  expect(fish == 2).toEqual(true);
});