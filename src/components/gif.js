import React, { Component } from 'react';

const Gif = (props) => {
  return (
    <img
      src={`https://i.giphy.com/media/${props.id}/giphy.webp`}
      alt=""
      className="gif"
      id={props.id}
      onClick={props.handleClick}
    />
  )
}

export default Gif;
