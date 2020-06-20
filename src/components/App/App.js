import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

export default class App extends Component {
  render() {
    return (
      <div>
        {list.map((item) => (
          <div>
            <a href={item.url}>"Click zo"</a>
            <div>Author: {item.author}</div>
            <div>Title: {item.title}</div>
            <div>points: {item.points}</div>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}
