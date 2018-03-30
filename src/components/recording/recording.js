import React from 'react';

import Articles from '../articles/articles';
import AddForm from '../add-form/add-form';

class Recording extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      articles: []
    };
    this.addArticle = this.addArticle.bind(this);
  }

  addArticle(article) {
    const articles = [...this.state.articles, article];
    const sum = articles.reduce(
      (prev, next) => prev + parseInt(next.price, 10),
      0
    );
    this.setState(state => ({
      articles,
      sum
    }));
  }

  handleToAdd(article) {
    this.addArticle(article);
  }

  render() {
    return (
      <div>
        <h2>Sum: {this.state.sum}</h2>
        <Articles
          articles={this.state.articles}
          nbArticles={this.state.nbArticles}
        />
        <AddForm article={this.handleToAdd.bind(this)} />
      </div>
    );
  }
}

export default Recording;
