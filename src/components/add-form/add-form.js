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
      name: '',
      price: 0
    };
  }

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  addClicked() {
    this.inputPrice.focus();
    this.setState({ price: 0, name: '' });
  }

  render() {
    const handleToAdd = this.props.article;
    return (
      <Card className="Add-card">
        <CardText>
          <Input
            type="text"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange.bind(this, 'name')}
          />
          <Input
            type="number"
            label="Price"
            value={this.state.price}
            onChange={this.handleChange.bind(this, 'price')}
            innerRef={ref => {
              this.inputPrice = ref;
            }}
          />
          <Button
            icon="check"
            onClick={() => {
              this.addClicked();
              return handleToAdd(this.state);
            }}
            raised
            accent
          />
        </CardText>
      </Card>
    );
  }
}

export default AddForm;
