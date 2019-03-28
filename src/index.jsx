import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import Gif from './components/gif';
import GifList from './components/gifList';
import giphy from 'giphy-api';

import '../assets/stylesheets/application.scss';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      selected_gif_id: 'l0HlJsrIi8dTq1JCw',
      ids: []
    }
  }

  requestGifs = (event) => {
    giphy('5KDWOVpOdkGxAC2xNAduiZGiFmp77kBO').search({
      q: event.currentTarget.value,
      limit: 6
    }, (err, res) => {
      this.setState({
        ids: (res.data.map(data => data.id))
      })
    });
  }

  changeGif = (event) => {
    this.setState({
      selected_gif_id: event.currentTarget.id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar handleSearch={this.requestGifs}></SearchBar>
          <div className="selected-gif">
            <Gif id={this.state.selected_gif_id}></Gif>
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={this.state.ids} handleClick={this.changeGif}></GifList>
        </div>
      </div>
    );
  }
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
