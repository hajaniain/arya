import React from 'react';

import './record.css';

import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';

class Record extends React.Component {

  enter() {
    console.log('ENTER');

  }

  render() {
    return (
      <Card onClick={this.enter} className="card-record">
        <CardText>
          <h2>{this.props.name}</h2>
        </CardText>
      </Card>
    );
  }
}

export default Record;
