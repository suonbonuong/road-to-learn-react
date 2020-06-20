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
  constructor(props) {
    super(props);
    this.state = {
      list,
    };
  }

  onDismiss = (_objectID) => {
    this.setState({
      list: this.state.list.filter((item) => item.objectID !== _objectID),
    });
  };

  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <div key={item.url}>
            <a href={item.url}>"Click zo"</a>
            <div>Author: {item.author}</div>
            <div>Title: {item.title}</div>
            <div>points: {item.objectID}</div>
            <span>
              <button onClick={() => this.onDismiss(item.objectID)} type="button">
                Xoa di!
              </button>
            </span>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}
