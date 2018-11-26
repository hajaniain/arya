import React, { useState, useEffect } from 'react';

import Articles from '../articles/articles';
import AddForm from '../add-form/add-form';

export default function Recording(props) {
  const currentRecords = JSON.parse(localStorage['records'] || '[]');
  const [articles, setArticles] = useState([]);
  const [records, setRecords] = useState(currentRecords);
  const [id] = useState(props.match.params.id);

  useEffect(() => {
    setArticles(records[id].articles);
  });

  function addArticle(article) {
    const items = [...articles, article];
    const recs = [...records];

    recs[id].articles = items;
    setArticles(items);
    setRecords(recs);

    localStorage['records'] = JSON.stringify(records);
  }

  function handleToAdd(article) {
    addArticle(article);
  }

  const sum = articles.reduce(
    (prev, next) => prev + parseInt(next.price, 10),
    0
  );

  return (
    <div>
      <h2>Sum: {sum}</h2>
      <AddForm article={handleToAdd} />
      <Articles articles={articles} />
    </div>
  );
}
