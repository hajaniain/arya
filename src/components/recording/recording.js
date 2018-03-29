import React from 'react';
import Button from 'react-toolbox/lib/button/Button';

import Articles from '../articles/articles';
import AddDialog from '../add-dialog/add-dialog';

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
        <Button onClick={this.addArticle} icon='add' label='Add' raised primary />
        <AddDialog active={this.state.openAddDialog}/>
      </div>
    );
  }
}

export default Recording;
