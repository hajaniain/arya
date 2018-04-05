import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';
import './records.css';

import Record from '../record/record';

class Records extends React.Component {
  constructor(props) {
    super(props);
    const records = localStorage.getItem('records');
    this.state = {
      records: records ? JSON.parse(records) : []
    };
    this.add = this.add.bind(this);
  }

  renderRecords() {
    // let records = localStorage.getItem('records');
    if (this.state.records) {
      return this.state.records.map((record, key) => {
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

  add() {
    const newRecord = {
      id: `${this.state.records.length}`,
      name: `${new Date().toLocaleDateString('en-US')}`,
      articles: []
    };
    const records = JSON.stringify([...this.state.records, newRecord]);

    localStorage.setItem('records', records);
    this.props.history.push(`/recording/${this.state.records.length}`);
  }

  render() {
    return (
      <div className="grid-container">
        {this.renderRecords()}
        <Card onClick={this.add} className="card-add-record">
          <CardText>
            <h2>+</h2>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Records;
