import React from 'react';
import './article.css';

import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import Button from 'react-toolbox/lib/button/Button';

export default function Article(props) {
  const name = props.name || `Article ${props.id + 1}`;
  const price = props.price.toString();
  const { id, recordId, setArticles } = props;

  function handleRemove() {
    const recordIndex = parseInt(recordId, 10);
    const articleId = id;
    const currentRecord = JSON.parse(localStorage['records'])[recordIndex];
    const newArticles = [...currentRecord];
    newArticles.splice(articleId, 1);
    setArticles(newArticles);
  }

  return (
    <List selectable ripple>
      <ListItem
        caption={price}
        legend={name}
        rightActions={[
          <Button key="1" icon="delete" onClick={() => handleRemove()} />
        ]}
      />
    </List>
  );
}
