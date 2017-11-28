import React from 'react';
import { Alert, StyleSheet, Image, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';



export default class PekRestaurantList extends React.Component {
  static navigationOptions = {
    title: 'PekRestaurantList',
  }


  render() {

    return ( 
    	<View>
        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          //onPress
 
          >
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
             source={require('../images/food.png')}
             fadeDuration={0}
             style={{ width: 48, height: 48 }}
             />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                A Beijing Restaurant
              </Text>
            </View>
          </View>
        </Touchable>

         <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._onPressTouch}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
             source={require('../images/food.png')}
             fadeDuration={0}
             style={{ width: 48, height: 48 }}
             />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                A Beijing Restaurant
              </Text>
            </View>
          </View>
        </Touchable>


        </View>

       );
    }
}    




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },

  isShowing: {
    display: 'none',
  },
  optionsTitleText: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
    marginTop: 20
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 40,
  },
});