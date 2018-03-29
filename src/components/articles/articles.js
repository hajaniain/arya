import React from 'react';

import Article from '../article/article';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderArticles() {
    let articles = [];
    for (let i = 0; i < this.props.nbArticles; i++) {
      articles.push(<Article key={i} id={i} />);
    }
    return articles;
	}

  render() {
    return (
      <div>
        <h2>Articles</h2>
        {this.renderArticles()}
      </div>
    );
  }
}

export default Articles;
