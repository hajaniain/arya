import React, { useState } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import { AppService } from '../../services/app-service';
import Record from '../record/record';
import './records.css';

export default function Records(props) {
  const currentRecords = AppService.getRecords();
  const [records, setRecords] = useState(currentRecords);

  function renderRecords() {
    if (records) {
      return (
        <div className="grid-container">
          {records.map((record, key) => {
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
          })}
        </div>
      );
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
    const recs = [...records, newRecord];
    setRecords(recs);

    AppService.setRecords(recs);
    props.history.push(`/recording/${records.length}`);
  }

  return (
    <div>
      {renderRecords()}
      <Button className="add-record-button" onClick={add} icon="add" label="Add" raised/>
    </div>
  );
}
