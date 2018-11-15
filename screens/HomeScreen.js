import React from 'react';
import { View, Text, Button } from 'react-native';
import GenerateNumberButton from '../components/GenerateNumberButton.js';

export default class HomeScreen extends React.Component {
  state = {
    number: 0,
  };
  componentDidMount = () => {
    this._generateNewNumber();
  }

  _generateNewNumber = () => { this.setState({ number: Math.floor(Math.random() * 1000000) + 100 }); };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.number}</Text>
        <GenerateNumberButton
          generateNumber={this._generateNewNumber} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
    color: '#87CEEB',
    fontWeight: 'bold'
  },
  button: {
    padding: 30
  }
}
