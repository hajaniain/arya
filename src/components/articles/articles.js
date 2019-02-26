import React from 'react';

import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import Button from 'react-toolbox/lib/button/Button';
import { AppService } from '../../services/app-service';

export default function Articles(props) {
  const { recordId, setArticles, articles } = props;

  function handleRemove(articleId) {
    const recordIndex = parseInt(recordId, 10);
    const currentRecord = AppService.getRecords()[recordIndex];
    const newArticles = [...currentRecord.articles];
    newArticles.splice(articleId, 1);
    setArticles(newArticles);
  }

  function renderArticles() {
    return articles.map(({ name, price }, key) => {
      const articleName = name || `Article ${key + 1}`;
      const articlePrice = price.toString();
      return (
        <List key={key} selectable ripple>
          <ListItem
            caption={articlePrice}
            legend={articleName}
            rightActions={[
              <Button key="1" icon="delete" onClick={() => handleRemove(key)} />
            ]}
          />
        </List>
      );
    });
  }

  return (
    <div>
      <h4>Articles ({props.articles.length})</h4>
      {renderArticles()}
    </div>
  );
}
