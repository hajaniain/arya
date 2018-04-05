import React from 'react';
import { Link } from 'react-router-dom';

import './records.css';
import Record from '../record/record';

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRecords() {
    let records = localStorage.getItem('records');
    if (records) {
      return JSON.parse(records).map((record, key) => {
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

  render() {
    return <div className="grid-container">{this.renderRecords()}</div>;
  }
}

export default Records;
