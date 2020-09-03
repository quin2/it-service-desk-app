import React from 'react';

import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import MenuItem from '../components/MenuItem'

export class ResourceScreen extends React.Component {
  static navigationOptions = {
    title: 'Student Resources'
  };

  render() {
    return (
      <ScrollView style={styles.Container}>
      
      <MenuItem img={require('../assets/logoSmall.png')}
             direction={styles.flexRowReverse}
             title={'Equipment Checkout'}
             desc={'The IT Service Desk loans equipment by reservation or on a first come, first served basis.'}
             action={() => this.props.navigation.navigate('WebBrowser', 
                                                          {url: 'https://lclark.siso.co/sso', 
                                                           title: "Equipment Checkout"})} />

      <MenuItem img={require('../assets/printer.png')}
             direction={styles.flexRow}
             title={'Resource Lab'}
             desc={'The Resource Lab provides high-end large format printing, as well as powerful computers with extensive software for the production of video, audio, and multimedia projects.'}
              action={() => this.props.navigation.navigate('WebBrowser', 
                                                        {url: 'https://www.lclark.edu/information_technology/instructional_media_services/resource_lab/', 
                                                         title: "Resource Lab"})}/>

      <MenuItem img={require('../assets/nyt.png')}
              direction={styles.flexRowReverse}
              title={'New York Times Subscription'}
              desc={'Anyone with an @lclark email address has full access to NYTimes.com and NYT mobile apps. '}
              action={() => this.props.navigation.navigate('WebBrowser', 
                                                          {url: 'https://accessNYT.com', 
                                                           title: "The New York Times"})}/>

      <MenuItem img={require('../assets/office.png')}
             direction={styles.flexRow}
             title={'Office 365'}
             desc={'Students, staff, and faculty can use their @lclark.edu email to activate a free Office 365 account.'}
             action={() => this.props.navigation.navigate('WebBrowser', 
                                                          {url: 'https://www.microsoft.com/en-us/education/products/office', 
                                                           title: "Office 365"})}/>

      <View style={styles.paddedBottom}>
        <MenuItem img={require('../assets/globalprotect.png')}
               direction={styles.flexRowReverse}
               title={'VPN Software'}
               desc={'A VPN gives you an on-campus IP address, so you can access things such as library databases from off campus.'}
                action={() => this.props.navigation.navigate('WebBrowser', 
                                                          {url: 'https://www.lclark.edu/information_technology/security/remote/', 
                                                           title: "VPN"})}/>
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
});