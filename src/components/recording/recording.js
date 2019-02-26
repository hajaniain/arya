import React, { useState, useEffect } from 'react';

import Articles from '../articles/articles';
import AddForm from '../add-form/add-form';
import Link from 'react-toolbox/lib/link/Link';
import { AppService } from '../../services/app-service';

import './recording.css';

export default function Recording(props) {
  const currentRecords = AppService.getRecords();
  const recordId = props.match.params.id;
  const [articles, setArticles] = useState([]);
  const [records, setRecords] = useState(currentRecords);
  const [id] = useState(recordId);

  useEffect(() => {
    setArticles(records[id].articles);
  });

  function setArticlesOfRecord(articles) {
    const recs = [...records];
    recs[id].articles = articles;
    setRecords(recs);
    AppService.setRecords(records);
  }

  function add(article) {
    const items = [...articles, article];
    setArticles(items);
    setArticlesOfRecord(items);
  }

  const sum = articles.reduce(
    (prev, next) => prev + parseInt(next.price, 10),
    0
  );

  return (
    <div>
      <Link className="records-link" href={'/'}>
        Records
      </Link>
      <h2>Sum: {sum}</h2>
      <AddForm article={add} />
      <Articles
        articles={articles}
        recordId={recordId}
        setArticles={setArticlesOfRecord}
      />
    </div>
  );
}
