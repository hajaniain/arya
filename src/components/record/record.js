import React from 'react';

import './record.css';

import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';
import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link/Link';

export default function Record(props) {
  function handleRemove() {
    const { id, records, setRecords } = props;
    const recordIndex = parseInt(id, 10);
    const newRecords = [...records];
    newRecords.splice(recordIndex, 1);
    localStorage['records'] = JSON.stringify(newRecords);
    setRecords(newRecords);
  }

  return (
    <Card className="card-record">
      <Link className="record-title" href={`/recording/${props.id}`}>
        <CardText>
          <h2>{props.name}</h2>
        </CardText>
      </Link>
      <Button onClick={() => handleRemove()} icon="delete" accent />
    </Card>
  );
}
