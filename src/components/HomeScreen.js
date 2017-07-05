import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

const people = [
  {
    username: 'dong.ming',
    name: 'Dong Ming',
    email: 'd3ming@gmail.com',
    avatar: 'https://en.gravatar.com/userimage/39982534/0862e4d16b6d45a0e42d5bb718420964.png',
    social: {
      angel: 'https://angel.co/dong-ming',
      medium: 'https://medium.com/@dongming',
      twitter: 'https://twitter.com/dming'
    }
  },
  {
    username: 'xu.gao',
    name: 'Xu Gao',
    email: 'xgao0131@hotmail.com'
  }
];

const styles = StyleSheet.create({
  addButton: {
    marginTop: 10
  }
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View>
        <Card
          title='arcadia'>
          {
            people.map((u) => {
              return (
                <ListItem
                  key={u.username}
                  title={u.name}
                  avatar={{uri: u.avatar}}
                />
              );
            })
          }

          <Button
            title="Add"
            style={styles.addButton}
            backgroundColor="green"
          />
        </Card>
      </View>
    );
  }
}
