import React from 'react';
import {Image,Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          </View>
          <Text style = {styles.welcomeMessage} >Working on this section... Coming Soon! </Text>

        </ScrollView>

    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeMessage: {
    marginTop: 100,
  },
});
