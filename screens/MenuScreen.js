import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class MenuScreen extends React.Component {
	static navigationOptions = {
		title: 'MenuScreen',
	};
	constructor(props) {
		super(props)
	}

	render() {
		return(
          <View>
			<Text style = {{marginTop: 100}}>This is the Menu Screen</Text>
		  </View>	
	  );		
	}
}