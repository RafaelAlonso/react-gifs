import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
import SelectedGif from './components/selectedGif';

import '../assets/stylesheets/application.scss';

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar></SearchBar>
        <SelectedGif id="l0HlJsrIi8dTq1JCw"></SelectedGif>
      </div>
      <div className="right-scene"></div>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
