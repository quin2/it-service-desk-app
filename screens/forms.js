import React from 'react';

import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import MenuItem from '../components/MenuItem'

export class FormScreen extends React.Component {
  static navigationOptions = {
    title: "Forms and Requests",
  }

  render() {
    return (
      <ScrollView style={styles.Container}>

      <MenuItem img={require('../assets/eth0.png')}
             direction={styles.flexRow}
             textColor={styles.yellow}
             action={() => this.props.navigation.navigate('WebBrowser', 
                                                          {url: 'https://www.lclark.edu/information_technology/forms_and_requests/ethernet-port-activation-request/', 
                                                           title: "Ethernet Port Activation"})} 
             title={'Ethernet Port Activation'} />

      <MenuItem img={require('../assets/console.png')}
             direction={styles.flexRowReverse}
             textColor={styles.red}
             action={() => this.props.navigation.navigate('WebBrowser', 
                                                          {url: 'https://www.lclark.edu/information_technology/forms_and_requests/console-network-connection-request/', 
                                                           title: "Console Connection"})} 
             title={'Console Connection Request'} />

      <MenuItem img={require('../assets/bluePrinter.png')}
             direction={styles.flexRow}
             textColor={styles.sky} 
             action={() => this.props.navigation.navigate('WebBrowser', 
                                                          {url: 'https://www.lclark.edu/information_technology/client_services/labs/printing/print_appeal/', 
                                                           title: "Print Appeal"})}
             title={'Print Appeal Form'} />

      <View style={styles.paddedBottom}>
        <MenuItem img={require('../assets/logoSmall.png')}
               direction={styles.flexRowReverse}
               action={() => this.props.navigation.navigate('WebBrowser', 
                                                          {url: 'https://docs.google.com/forms/d/e/1FAIpQLScGX2yCByOUwTvbb-tUW5eT6aPXBSubT-HDmorzNHhl7cj_DA/viewform', 
                                                           title: "IT Satisfaction Survey"})}
               title={'IT Satisfaction Survey'} />
      </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: "column",
  },
  flexRow:{
    flexDirection: "row",
  },
  flexRowReverse:{
    flexDirection: "row-reverse"
  },
  sky:{
    color: "#88DDFD"
  },
  yellow:{
    color: "#FFDE16",
  },
  red:{
    color: "#EF4036",
  },
});