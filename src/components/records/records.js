import React, { useState } from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';
import Record from '../record/record';
import './records.css';

export default function Records(props) {
  const currentRecords = JSON.parse(localStorage['records'] || '[]');
  const [records, setRecords] = useState(currentRecords);

  function renderRecords() {
    if (records) {
      return records.map((record, key) => {
        return (
          <Record
            key={key.toString()}
            id={key.toString()}
            records={records}
            setRecords={setRecords}
            name={record.name}
            articles={record.articles}
          />
        );
      });
    } else {
      return <div />;
    }
  }

  function add() {
    const currentDate = new Date().toLocaleDateString('en-US');
    const todaysRecords = records.filter(
      record => record.name.indexOf(`${currentDate}`) >= 0
    );
    const recordName = `${currentDate}${
      todaysRecords.length > 0 ? '(' + todaysRecords.length + ')' : ''
    }`;
    const newRecord = {
      id: `${records.length}`,
      name: recordName,
      articles: []
    };
    const recs = JSON.stringify([...records, newRecord]);
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
