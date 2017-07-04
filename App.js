import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SocialIcon } from 'react-native-elements';

function facebookLogin() {
  // blah
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Arcadia!</Text>
        <SocialIcon
          title='Sign In'
          button
          onPress={facebookLogin}
          style={styles.loginButton}
          type='facebook'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    padding: 10,
    width: 150
  }
});
