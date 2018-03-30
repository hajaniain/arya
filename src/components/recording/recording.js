import React from 'react';
import Button from 'react-toolbox/lib/button/Button';

import Articles from '../articles/articles';
import AddForm from '../add-form/add-form';

class Recording extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      nbArticles: 0,
      openAddDialog: false
    };
    this.addArticle = this.addArticle.bind(this);
  }

  addArticle() {
    this.setState(state => ({
      nbArticles: ++state.nbArticles,
      openAddDialog: true
    }));
  }

  render() {
    return (
      <div>
        <p>{this.state.sum}</p>
        <Articles nbArticles={this.state.nbArticles} />
        <AddForm/>
        <Button onClick={this.addArticle} icon='add' label='Add' raised primary />
      </div>
    );
  }
}

export default Recording;
