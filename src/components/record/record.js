import React from 'react';

import './record.css';

import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';

export default function Record(props) {
  return (
    <Card className="card-record">
      <CardText>
        <h2>{props.name}</h2>
      </CardText>
    </Card>
  );
}
