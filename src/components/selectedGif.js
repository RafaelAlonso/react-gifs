import React, { Component } from 'react';

class SelectedGif extends Component {
  constructor(props){
    super(props);

    this.state = {
      id: props.id
    }
  }

  render(){
    return (
      <div className="selected-gif">
        <img src={`https://i.giphy.com/media/${this.state.id}/giphy.webp`} alt="" className="gif"/>
      </div>
    )
  }
}

export default SelectedGif;
