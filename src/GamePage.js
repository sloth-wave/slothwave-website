import React, { Component } from 'react';
import Unity from 'react-unity-webgl';

import './styles/GamePage.css';

class GamePage extends Component {

  componentWillUnmount(){

  }

  render() {
    return (
      <div className="GamePage">
        <Unity
          src="./unity_builds/transmitter-quitter/TQ Web.json"
          loader="./unity_builds/transmitter-quitter/UnityLoader.js"
          width="960px"
          height="600px"
        />

        <div classname="webgl-content">
          <div className="footer">
            <div className="webgl-logo" />
            <div
              className="fullscreen"
              onclick="gameInstance.SetFullscreen(1)"
            />
            <div className="title">Fullscreen</div>
          </div>
          <hr style={{display: 'block', border: '1px solid #aaa', margin: '30px 0'}} />
          <div className="about">
            <h1 className="title">Transmitter Quitter</h1>
            <p>A game about channel surfing on an old tube television. Originally created for Global Game Jam 2018 in San Diego.</p>
            <h2>Controls</h2>
            <p>Everything in the game can be controlled with just your scroll wheel and left mouse button.</p>
            <h2>Links</h2>
            <ul>
              <li>
                <a href="https://globalgamejam.org/2018/games/transmitter-quitter">
                  Global Game Jam Submission Page
                </a>
              </li>
              <li>
                <a href="https://github.com/sloth-wave/transmitter-quitter">
                  Source Code
                </a>
              </li>
            </ul>
            <h2>Credits</h2>
            <ul>
              <li>
                <span>Cormac Jenkins:</span> Programming and TV textures/shaders
              </li>
              <li>
                <span>Danny Woods:</span> Programming and art
              </li>
              <li>
                <span>J Golden-Needham:</span> Programming
              </li>
              <li>
                <span>Jon Glover:</span> Programming and art
                <ul>
                  <li>
                    <a href="http://jglover.space/">Portfolio</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Karen Morrison:</span> Programming, art, and sound design
              </li>
              <li>
                <span>Miranda Waterman:</span> Art and sound design
                <ul>
                  <li>
                    <a href="http://cuttleskulls.com">Portfolio</a>
                  </li>
                </ul>
              </li>
            </ul>
            <img src="/images/team_photo.jpg" alt="The Slothwave team." />
          </div>
        </div>

      </div>
    );
  }

}

export default GamePage;
