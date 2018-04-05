import React from 'react';

import Article from '../article/article';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderArticles() {
    return this.props.articles.map((article, key) => (
      <Article key={key} id={key} price={article.price} name={article.name} />
    ));
  }

  render() {
    return (
      <div>
        <h4>Articles ({this.props.articles.length})</h4>
        {this.renderArticles()}
      </div>
    );
  }
}

export default Articles;
