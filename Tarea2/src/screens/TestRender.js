import React, { PureComponent } from 'react';
import { Button, Text } from 'react-native';

export default class TestRender extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      numero: 0,
    };
  }

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   const { numero } = this.state;
  //   const { numero: nuevoNumero } = nextState;

  //   if (numero !== nuevoNumero) {
  //     return true;
  //   }

  //   return false;
  // }

  changeNumber = numero => this.setState({ numero })

  render() {
    const { numero } = this.state;
    console.log('render')
    return (
      <>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>{numero}</Text>
        <Button
          onPress={() => this.changeNumber(1)}
          title="Boton 1" color="orange"
        />
        <Button
          onPress={() => this.changeNumber(2)}
          title="Boton 2"
        />
      </>
    );
  }
}
