import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

/* const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
}; */

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  handleIsDisable = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxTotal = 210;
    const maxAttr = 90;
    const minAttr = 0;
    const total = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    const textCheck = cardName && cardDescription && cardImage && cardRare;

    const attrCheck = (total <= maxTotal);

    const attt1MaxCheck = (Number(cardAttr1) <= maxAttr && Number(cardAttr1) >= minAttr);
    const attt2MaxCheck = (Number(cardAttr2) <= maxAttr && Number(cardAttr2) >= minAttr);
    const attt3MaxCheck = (Number(cardAttr3) <= maxAttr && Number(cardAttr3) >= minAttr);
    const minMaxAttrCheck = attt1MaxCheck && attt2MaxCheck && attt3MaxCheck;

    this.setState({ isSaveButtonDisabled: !(textCheck && attrCheck && minMaxAttrCheck) });
  };

  onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const valor = type === 'checkbox' ? checked : value;

    this.setState({ [name]: valor }, (this.handleIsDisable));
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onSaveButtonClick } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
