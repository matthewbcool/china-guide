import React from 'react';
import PekHomeView from './PekHomeView.js';
import { ScrollView, StyleSheet } from 'react-native';

export default class PekScreen extends React.Component {
  static navigationOptions = {
    title: 'PEK',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
    	<ScrollView style={styles.container}>
    	    <PekHomeView />
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
