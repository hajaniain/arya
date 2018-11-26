import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';
import './records.css';

import Record from '../record/record';

export default function Records(props) {

  const currentRecords = JSON.parse(localStorage['records'] || '[]');
  const [records, setRecords] = useState(currentRecords);

  function renderRecords() {
    if (records) {
      return records.map((record, key) => {
        return (
          <Link key={key.toString()} to={`/recording/${record.id}`}>
            <Record
              key={key.toString()}
              name={record.name}
              articles={record.articles}
            />
          </Link>
        );
      });
    } else {
      return <div />;
    }
  }

  function add() {
    const newRecord = {
      id: `${records.length}`,
      name: `${new Date().toLocaleDateString('en-US')}`,
      articles: []
    };
    const recs = JSON.stringify([...records, newRecord])
    setRecords(recs);

    localStorage['records'] = recs;
    props.history.push(`/recording/${records.length}`);
  }

  return (
    <div className="grid-container">
      {renderRecords()}
      <Card onClick={add} className="card-add-record">
        <CardText>
          <h2>+</h2>
        </CardText>
      </Card>
    </div>
  );
}
