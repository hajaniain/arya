import React from 'react';
import './article.css';

import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 200
    };
  }

  render() {
    const name = this.props.name || `Article ${this.props.id + 1}`;
    const price = this.props.price.toString();

    return (
      <List selectable ripple>
        <ListItem caption={price} legend={name} />
      </List>
    );
  }
}

export default Article;
