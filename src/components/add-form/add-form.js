import React, { useState } from 'react';

import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';

import './add-form.css';

export default function AddForm(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  function handleAddClicked() {
    const inputPrice = document.getElementById('inputPrice');
    inputPrice.focus();

    setName('');
    setPrice(0);
  }

  const handleToAdd = props.article;
  return (
    <Card className="Add-card">
      <CardText>
        <Input type="text" label="Name" value={name} onChange={setName} />
        <Input
          type="number"
          label="Price"
          value={price}
          onChange={setPrice}
          id="inputPrice"
        />
        <Button
          icon="check"
          onClick={() => {
            handleAddClicked();
            return handleToAdd({ name, price });
          }}
          raised
          accent
        />
      </CardText>
    </Card>
  );
}
