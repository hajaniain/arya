import React from 'react';

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
      const renders = [];
      records = JSON.parse(records);
      for (let i = 0; i < records.length; i++) {
        const record = records[i];
        renders.push(
          <Record key={i} name={record.name} articles={record.articles} />
        );
      }
      return renders;
    } else {
      return <div />;
    }
  }

  render() {
    return <div className="grid-container">{this.renderRecords()}</div>;
  }
}

export default Records;
