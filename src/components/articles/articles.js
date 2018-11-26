import React from 'react';

import Article from '../article/article';

export default function Articles(props) {
  function renderArticles() {
    return props.articles.map((article, key) => (
      <Article key={key} id={key} price={article.price} name={article.name} />
    ));
  }

  return (
    <div>
      <h4>Articles ({props.articles.length})</h4>
      {renderArticles()}
    </div>
  );
}
