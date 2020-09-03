import React from 'react';

import {
  ScrollView,
  StyleSheet
} from 'react-native';

import email from 'react-native-email'
import call from 'react-native-phone-call'

import MenuItem from '../components/MenuItem'

const phoneArgs = {
    number: '5037687225', // String value with the number to call
    prompt: true// Optional boolean property. Determines if the user should be prompt prior to the call 
};

const supportChat = require('../assets/support.html');

export class HelpScreen extends React.Component {
  static navigationOptions = {
    title: 'Get Help',
  };

  handleEmail = () => {
    const to = ['itservice@lclark.edu'] // string or array of email addresses
    email(to, {
        subject: 'IT Service Ticket',
        body: 'Hello,'
    }).catch(console.error)
  }

  render() {
    return (
      <ScrollView style={styles.Container}>

        <MenuItem img={require('../assets/chat.png')}
             direction={styles.flexRowReverse}
             textColor={styles.sky} 
             title={'Chat with one of our technicians!'}
             action={() => this.props.navigation.navigate('WebBrowser', 
                                                          {html: supportChat, 
                                                           title: "Support Chat"})}
             desc={'We are available to answer your questions during buisness hours.'}/>

        <MenuItem img={require('../assets/person.png')}
             direction={styles.flexRow}
             textColor={styles.magenta} 
             title={'Come Visit us!'}
             subtext={'Open Mon-Fri from 9am to 5pm'}
             desc={'We are located on the bottom floor of Watzek Library—just follow the blue dots!'}/>

        <MenuItem img={require('../assets/bigenvelope.png')}
             direction={styles.flexRowReverse}
             textColor={styles.green} 
             title={'Email Us!'}
             subtext={'itservice@lclark.edu'}
             action={() => this.handleEmail()}
             desc={'Your email creates a work order so we can track troubleshooting steps and response times.'}/>

        <MenuItem img={require('../assets/greenphone.png')}
             direction={styles.flexRow}
             textColor={styles.green} 
             title={'Give Us a Call!'}
             subtext={'503-768-7225'}
             action={() => call(phoneArgs).catch(console.error)}
             desc={'Our technicians are available to help solve your technology problems.'}/>

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
  green:{
    color: "#8CC63F",
  },
  magenta:{
    color: "#B9519F",
  },
  sky:{
    color: "#88DDFD"
  },
});