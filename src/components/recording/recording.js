import React from 'react';

import Articles from '../articles/articles';
import AddForm from '../add-form/add-form';

class Recording extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
    this.addArticle = this.addArticle.bind(this);
  }

  addArticle(article) {
    this.setState(state => ({
      articles: [...this.state.articles, article]
    }));
  }

  handleToAdd(article) {
    this.addArticle(article);
  }

  render() {
    const sum = articles.reduce(
      (prev, next) => prev + parseInt(next.price, 10),
      0
    );
    return (
      <div>
        <h2>Sum: {sum}</h2>
        <AddForm article={this.handleToAdd.bind(this)} />
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default Recording;
