import React from 'react';

import Articles from '../articles/articles';

class Recording extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      nbArticles: 2
    };
    this.addArticle = this.addArticle.bind(this);
  }

  addArticle() {
    this.setState(state => ({
      nbArticles: ++state.nbArticles
    }));
  }

  render() {
    return (
      <div>
        <p>{this.state.sum}</p>
        <Articles nbArticles={this.state.nbArticles} />
        <button onClick={this.addArticle}>Add</button>
      </div>
    );
  }
}

export default Recording;
