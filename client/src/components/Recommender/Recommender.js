import React, { Component } from 'react';
import InputPanel from './RecommenderPanels/InputPanel';
import SuggestionPanel from './RecommenderPanels/SuggestionPanel';
import ItemDetailsPanel from './RecommenderPanels/ItemDetailsPanel';
import './Recommender.css';

class Recommender extends Component {
  render() {
    return (
      <div className="recommender">
        <InputPanel />
        <SuggestionPanel />
        <ItemDetailsPanel />
      </div>
    );
  }
}

export default Recommender;
