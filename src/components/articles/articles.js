import React from 'react';

import Article from '../article/article';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderArticles() {
    let articles = [];
    for (let i = 0; i < this.props.articles.length; i++) {
      const article = this.props.articles[i];
      articles.push(<Article key={i} id={i} price={article.price} name={article.name} />);
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
