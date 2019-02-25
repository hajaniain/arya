import React, { useState, useEffect } from 'react';

import Articles from '../articles/articles';
import AddForm from '../add-form/add-form';

export default function Recording(props) {
  const currentRecords = JSON.parse(localStorage['records'] || '[]');
  const recordId = props.match.params.id;
  const [articles, setArticles] = useState([]);
  const [records, setRecords] = useState(currentRecords);
  const [id] = useState(recordId);

  useEffect(() => {
    setArticles(records[id].articles);
  });

  function add(article) {
    const items = [...articles, article];
    const recs = [...records];

    recs[id].articles = items;
    setArticles(items);
    setRecords(recs);

    localStorage['records'] = JSON.stringify(records);
  }

  const sum = articles.reduce(
    (prev, next) => prev + parseInt(next.price, 10),
    0
  );

  return (
    <div>
      <h2>Sum: {sum}</h2>
      <AddForm article={add} />
      <Articles
        articles={articles}
        recordId={recordId}
        setArticles={setArticles}
      />
    </div>
  );
}
