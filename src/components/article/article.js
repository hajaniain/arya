import React from 'react';
import './article.css';

import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';

export default function Article(props) {
  const name = props.name || `Article ${props.id + 1}`;
  const price = props.price.toString();

  return (
    <List selectable ripple>
      <ListItem caption={price} legend={name} />
    </List>
  );
}
