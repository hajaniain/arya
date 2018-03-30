import React from 'react';

import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

import './add-form.css';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    };
  }

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: parseInt(value, 10) });
  };

  render() {
    return (
      <Card className="Add-card">
        <CardText className="grid-container">
          <Input
            type="number"
            label="Amount"
            name="amount"
            className="add-input"
            value={this.state.amount}
            onChange={this.handleChange.bind(this, 'amount')}
            maxLength={5}
          />
          <div className="btn-grid">
            <Button className="add-btn" icon="check" label="" raised accent/>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default AddForm;
