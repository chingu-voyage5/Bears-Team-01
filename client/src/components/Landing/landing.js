import React, { Component } from "react";
import tvSVG from "./assets/tvSVG";
import bookSVG from "./assets/bookSVG";
import movieSVG from "./assets/movieSVG";
import "./landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="landing-bg-1 landing-bgs">
          <div className="landing-header-container">
            <tvSVG />
          </div>
          <input className="landing-input-1 landing-inputs" type="text" />
        </div>
        <div className="landing-bg-2 landing-bgs">
          <div className="landing-header-container">
            <bookSVG />
          </div>
          <input className="landing-input-2 landing-inputs" type="text" />
        </div>
        <div className="landing-bg-3 landing-bgs">
          <div className="landing-header-container">
            <movieSVG />
          </div>
          <input className="landing-input-3 landing-inputs" type="text" />
        </div>
      </div>
    );
  }
}
