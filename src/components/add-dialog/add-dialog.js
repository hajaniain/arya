import React from 'react';

import Input from 'react-toolbox/lib/input/Input';
import Dialog from 'react-toolbox/lib/dialog/Dialog';

class AddDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      amount: 0
    };
    this.actions = [
      { label: 'Cancel', onClick: this.handleToggle },
      { label: 'Save', onClick: this.handleToggle }
    ];
  }

  componentWillReceiveProps(nextProps) {
    this.setState(state => ({ active: nextProps.active }));
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  };

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: parseInt(value, 10) });
  };

  render() {
    return (
      <div>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title="Adding article"
        >
          <Input
            type="number"
            label="Amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange.bind(this, 'amount')}
            maxLength={5}
          />
        </Dialog>
      </div>
    );
  }
}

export default AddDialog;
