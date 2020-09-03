import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

import MenuItem from './components/MenuItem.js';

import { GetConnectedScreen, Phones, Instructions } from './screens/wifi.js';

import { PasswordScreen } from './screens/password.js';

import { HelpScreen } from './screens/help.js'

import { ResourceScreen } from './screens/resource.js'

import { FormScreen } from './screens/forms.js'

import Browse from './screens/browser.js';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recentTweet: "Loading...", tweetURL: "" };
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.container}>

          <View style={styles.iconRow}>
            <TouchableOpacity style={[styles.iconItem]}
                              onPress={() => this.props.navigation.navigate('GetConnected')}>
              <Image style={styles.menuItem} 
                     resizeMode={'contain'} 
                     source={require('./assets/wifi.png')} />
              <Text style={[styles.iconText, styles.red]}>Get</Text>
              <Text style={[styles.iconText, styles.red]}>Connected</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.iconItem]} 
                              onPress={() => this.props.navigation.navigate('PasswordScreen')}>
              <Image style={styles.menuItem} 
                       resizeMode={'contain'} 
                       source={require('./assets/lock.png')} />
              <Text style={[styles.iconText, styles.green]}>Change/Reset</Text>
              <Text style={[styles.iconText, styles.green]}>Password</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconItem}
                              onPress={() => this.props.navigation.navigate('GetHelp')}>
              <Image style={styles.menuItem} 
                         resizeMode={'contain'} 
                         source={require('./assets/help.png')} />
              <Text style={[styles.iconText, styles.blue]}>Get Help</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconItem}
                              onPress={() => this.props.navigation.navigate('WebBrowser', 
                                                          {url: 'https://pcounter.lclark.edu/webdeposit/', 
                                                           title: "Print Balence"})}>
              <Image style={styles.menuItem} 
                       resizeMode={'contain'} 
                       source={require('./assets/money.png')} />
              <Text style={[styles.iconText, styles.yellow]}>Check Print</Text>
              <Text style={[styles.iconText, styles.yellow]}>Balence</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iconRow}>
            <TouchableOpacity style={[styles.iconItem, styles.noBottom]}
                              onPress={() => this.props.navigation.navigate('StudentResources')}>
              <Image style={styles.menuItem} 
                         resizeMode={'contain'} 
                         source={require('./assets/resources.png')} />
              <Text style={[styles.iconText, styles.orange]}>Student</Text>
              <Text style={[styles.iconText, styles.orange]}>Resources</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.iconItem, styles.noBottom]}
                              onPress={() => this.props.navigation.navigate('Forms')}>
              <Image style={styles.menuItem} 
                       resizeMode={'contain'} 
                       source={require('./assets/forms.png')} />
              <Text style={[styles.iconText, styles.magenta]}>Forms and</Text>
              <Text style={[styles.iconText, styles.magenta]}>Requests</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    GetConnected: GetConnectedScreen,
    Instructions: Instructions,
    Phones: Phones,
    GetHelp: HelpScreen,
    StudentResources: ResourceScreen,
    Forms: FormScreen,
    WebBrowser: Browse,
    PasswordScreen: PasswordScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00AEEF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: "column",
  },
  iconRow:{
    //height: "28%",
    flex: 4,
    flexDirection: "row",
  },
  iconItem:{
    flex: 2,
    alignItems: "center",
    textAlign: "center",
    padding: 30,
    borderColor: "#D5D5D5",
    borderWidth: 0.5,
  },
  menuItem:{
    width: "75%",
    height: "75%",
    marginBottom: 10,
  },
  bold:{
    fontWeight: 'bold',
  },
  noBottom:{
    borderBottomWidth: 0,
  },
  iconText:{
    fontSize: 15,
  },
  red:{
    color: "#EF4036",
  },
  green:{
    color: "#8CC63F",
  },
  blue:{
    color: "#00AEEF",
  },
  yellow:{
    color: "#FFDE16",
  },
  orange:{
    color: "#F26522",
  },
  magenta:{
    color: "#B9519F",
  },
});
