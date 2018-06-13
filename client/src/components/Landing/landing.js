import React, { Component } from 'react';
import TvSVG from './assets/tvSVG';
import BookSVG from './assets/bookSVG';
import MovieSVG from './assets/movieSVG';
import './landing.css';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-bg-1 landing-bgs">
          <div className="landing-header-container">
            <TvSVG />
          </div>
          <input className="landing-input-1 landing-inputs" type="text" />
        </div>
        <div className="landing-bg-2 landing-bgs">
          <div className="landing-header-container">
            <BookSVG />
          </div>
          <input className="landing-input-2 landing-inputs" type="text" />
        </div>
        <div className="landing-bg-3 landing-bgs">
          <div className="landing-header-container">
            <MovieSVG />
          </div>
          <input className="landing-input-3 landing-inputs" type="text" />
        </div>
      </div>
    );
  }
}
