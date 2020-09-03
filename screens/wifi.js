import React from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { computer, iPhone, android } from '../strings/strings.js';

export class GetConnectedScreen extends React.Component {
  static navigationOptions = {
    title: 'Get Connected',
  };

  render() {
    return (
      <View style={styles.Container}>
        <TouchableOpacity style={styles.roundBox}
                          onPress={() => this.props.navigation.navigate('Phones')}>
          <Image style={styles.menuItem} resizeMode={'contain'} source={require('../assets/phone4.png')} />
          <Text style={[styles.iconText, styles.green]}>Phone/Tablet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roundBox}
                          onPress={() => this.props.navigation.navigate('Instructions', 
                                                                        {instructions: computer})}>
          <Image style={styles.menuItem} resizeMode={'contain'} source={require('../assets/Laptop.png')} />
          <Text style={[styles.iconText, styles.red]}>Computer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export class Phones extends React.Component {
  static navigationOptions = {
    title: 'Select Phone',
  };

  render() {
    return (
      <View style={styles.Container}>
        <TouchableOpacity style={[styles.roundBox, styles.flexRow]}
                          onPress={() => this.props.navigation.navigate('Instructions', 
                                                                        {instructions: iPhone})}>
          <Image style={styles.menuItem} resizeMode={'contain'} source={require('../assets/apple.png')} />
          <Text style={[styles.iconText, styles.lightGray]}>Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.roundBox, styles.flexRow]}
                          onPress={() => this.props.navigation.navigate('Instructions', 
                                                                        {instructions: android})}>
          <Image style={styles.menuItem} resizeMode={'contain'} source={require('../assets/Androidlogo.png')} />
          <Text style={[styles.iconText, styles.lightGray]}>Android</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export class Instructions extends React.Component {
  static navigationOptions = {
    title: 'Instructions',
  };

  render() {
    const { navigation } = this.props;
    const instructions = navigation.getParam('instructions', '');

    return (
      <View style={styles.InstContainer}>
        <View style={[styles.textBox]}>
          <Text style={[styles.lightGray, styles.bold]}>{instructions}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  roundBox:{
    borderColor: "#D5D5D5",
    borderWidth: 0.5,
    borderRadius: 10,
    height: "35%",
    alignItems: "center",
    textAlign: "center",
    padding: 30,
    marginLeft: 30,
    marginTop: 30,
    marginRight: 30,
  },
  textBox:{

  },
  InstContainer:{
    borderColor: "#D5D5D5",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 15,
    marginLeft: 30,
    marginTop: 30,
    marginLeft: 30, 
    marginRight: 30,
  },
  flexRow:{
    flexDirection: "row",
  },
  iconText:{
    fontSize: 15,
  },
  lightGray:{
    color: "#696969",
  },
  bold:{
    fontWeight: 'bold',
  },
  menuItem:{
    width: "75%",
    height: "75%",
    marginBottom: 10,
  },
  red:{
    color: "#EF4036",
  },
  green:{
    color: "#8CC63F",
  }
});