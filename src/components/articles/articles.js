import React from 'react';

import Article from '../article/article';

export default function Articles(props) {
  const { setArticles } = props;
  function renderArticles() {
    return props.articles.map((article, key) => (
      <Article
        key={key}
        id={key}
        recordId={props.recordId}
        setArticles={setArticles}
        price={article.price}
        name={article.name}
      />
    ));
  }

  return (
    <div>
      <h4>Articles ({props.articles.length})</h4>
      {renderArticles()}
    </div>
  );
}
