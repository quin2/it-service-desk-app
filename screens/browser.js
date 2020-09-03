import React from 'react';
import { 
  View,
  ActivityIndicator 
} from 'react-native'
import { 
  WebView 
} from 'react-native-webview'

export default class Browse extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', '');
    const url = navigation.getParam('url', '')
    var src = {uri: url}

    if(url.length == 0){
      src = navigation.getParam('html', '');
    } 

    return (
      <View style={{flex: 1}}>
        <WebView
          onLoad={() => this.hideSpinner()}
          style={{ flex: 1 }}
          source={src}
        />
        {this.state.visible && (
          <View style={{flex: 1, alignItems: 'center'}}>
            <ActivityIndicator
              size="large"
            />
          </View>
        )}
      </View>
    );
  }
}
