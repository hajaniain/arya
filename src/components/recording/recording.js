import React from 'react';

import Articles from '../articles/articles';
import AddForm from '../add-form/add-form';

import Toolbar from '../toolbar/toolbar';

class Recording extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      records: JSON.parse(localStorage.getItem('records')),
      id: props.match.params.id
    };
    this.addArticle = this.addArticle.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  componentDidMount() {
    this.initialize();
  }

  initialize() {
    const { articles } = this.state.records[this.state.id];
    this.setState(state => ({
      articles
    }));
  }

  addArticle(article) {
    const { articles, records } = {
      articles: [...this.state.articles, article],
      records: [...this.state.records]
    };
    records[this.state.id].articles = articles;
    this.setState(state => ({
      articles,
      records
    }));
    localStorage.setItem('records', JSON.stringify(this.state.records));
  }

  handleToAdd(article) {
    this.addArticle(article);
  }

  render() {
    const sum = this.state.articles.reduce(
      (prev, next) => prev + parseInt(next.price, 10),
      0
    );
    return (
      <div>
        <Toolbar />
        <h2>Sum: {sum}</h2>
        <AddForm article={this.handleToAdd.bind(this)} />
        <Articles articles={this.state.articles} />
      </div>
    );
  }
}

export default Recording;
