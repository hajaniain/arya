import React from 'react';

import Articles from '../articles/articles';

class Recording extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0
    }
  }

  addArticle() {
  }

  render() {
    return (
      <div>
        <p>{this.state.sum}</p>
        <Articles nbArticles={3} />
        <button onClick={this.addArticle}>Add</button>
      </div>
    );
  }
}

export default Recording;