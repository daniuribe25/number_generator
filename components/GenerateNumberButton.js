import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class GenerateNumberButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.generateNumber}
        style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.text}>Generar</Text>
          </View>
      </TouchableHighlight>);
  }
}

const styles = {
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    height: 60,
    flex: 0.7,
    backgroundColor: '#87CEEB',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  }
}
