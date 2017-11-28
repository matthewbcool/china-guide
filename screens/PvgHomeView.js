import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import Touchable from 'react-native-platform-touchable';
import PvgRestaurantList from './components/PvgRestaurantList.js';

export default class PvgHomeView extends React.Component {
    constructor(){
    super();
    this.state ={
      status:true
    }
  }

  ShowHideTextComponentView = () =>{
    if(this.state.status == true)
      {
        this.setState({status: false})
      }
    else
      {
        this.setState({status: true})
      }
  }
  
  render() {
    return (
      <View>
        <Text style={styles.optionsTitleText}>
          PVG
        </Text>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this.ShowHideTextComponentView}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Image
             source={require('./images/food.png')}
             fadeDuration={0}
             style={{ width: 48, height: 48 }}
             />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Restaurants
              </Text>
              { this.state.status ? <PvgRestaurantList /> : null }
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
  optionsTitleText: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
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
    marginTop: 10,
  },
});