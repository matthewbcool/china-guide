import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import  PvgHomeView  from './PvgHomeView.js';

export default class PvgScreen extends React.Component {
  static navigationOptions = {
    title: 'PVG',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <PvgHomeView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
