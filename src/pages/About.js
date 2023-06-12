import React, { Component } from 'react';
import "../pages/About.css";
import profile_pic from "../assets/profile_pic.jpg"; // my imagae

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic} // where image will be placed.
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Gabriel de Olaguibel</div> 
            <div className="brief_description">
              I'm a Computer Science and AI student at IE University. I'm passionate about technology and I love to learn new things. My interests are Weightlifting, Programming, and traveling.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
