import React, { Component } from 'react';
import Unity from 'react-unity-webgl';

class GamePage extends Component {

  render() {
    return (
      <div className="GamePage">
        <Unity
          src="public/unity_builds/transmitter-quitter/TQ Web.json"
          loader="public/unity_builds/transmitter-quitter/UnityLoader.js"
        />
      </div>
    );
  }

  pseudoCodeRender(){
    // Get the game name from the URL
    // If not a real game, redirect to /home
    // Else, find that game's build and description and display those in this template.
  }


}

export default GamePage;
