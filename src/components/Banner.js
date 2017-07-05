/* @flow */

import React from 'react';
import { Icon } from 'react-native-elements'

import { Platform, StyleSheet, Text, View } from 'react-native';

const Banner = () => (
  <View style={styles.banner}>
    <Icon name='flash_on' />
    <Text style={styles.title}>React Navigation Examples</Text>
  </View>
);

export default Banner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#673ab7',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    margin: 8,
  },
});