import React, { Component } from 'react';
import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.ids.map(id => <Gif id={id} key={id} handleClick={props.handleClick}></Gif> )}
    </div>
  );
}

export default GifList;
