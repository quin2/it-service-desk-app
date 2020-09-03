import React from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import MenuItem from '../components/MenuItem'

export class PasswordScreen extends React.Component {
  static navigationOptions = {
    title: 'Password Help',
  };

  render() {
    return (
      <View style={styles.Container}>
        <MenuItem img={require('../assets/purpleLock.png')}
               direction={styles.flexRow}
               textColor={styles.magenta}
               action={() => this.props.navigation.navigate('WebBrowser', 
                                                            {url: 'https://webadvisor.lclark.edu/WebAdvisor/WebAdvisor?CONSTITUENCY=WBDF&type=P&pid=CORE-XWBCOS003', 
                                                             title: "Change Password"})} 
        title={'I know my password'} />

        <MenuItem img={require('../assets/yellowLock.png')}
               direction={styles.flexRow}
               textColor={styles.yellow}
               action={() => this.props.navigation.navigate('WebBrowser', 
                                                            {url: 'https://webadvisor.lclark.edu/WebAdvisor/WebAdvisor?CONSTITUENCY=WBDF&type=P&pid=CORE-XWBCOS002', 
                                                             title: "Reset Password"})} 
        title={'I forgot my password'} />
      </View>
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
  yellow:{
    color: "#FFDE16",
  },
  magenta:{
    color: "#B9519F",
  },
});