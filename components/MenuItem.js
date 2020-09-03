import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class MenuItem extends React.Component {
  render(){
    var body = (
      <View>
      <View style={[styles.center, this.props.direction]}>
        <Image style={styles.halfSizeImage} resizeMode={'contain'} source={this.props.img} />
        <View style={styles.halfSize}>
          <Text style={[styles.helpText1, this.props.textColor]}>{this.props.title}</Text>
        </View>
      </View>

      {this.props.subtext && <Text style={styles.helpText2}>{this.props.subtext}</Text>}

      {this.props.desc && <Text style={styles.helpText3}>{this.props.desc}</Text>}
      </View>
    );

    return (
    <View>
      {this.props.action
        ? 
        (<TouchableOpacity style={[styles.flexCol, styles.roundBoxPlain]} onPress={this.props.action}>
          {body}
        </TouchableOpacity>)
        : 
        (<View style={[styles.roundBoxPlain]}>
          {body}
        </View>)
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center:{
    alignItems: "center",
    textAlign: "center",
  },
  halfSizeImage:{
    width: "40%"
  },
  halfSize:{
    width: "60%",
  },
  helpText1:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    color: "#696969",
    textAlign: 'center',
  },
  helpText2:{
    fontSize: 17,
    marginTop: 15,
    color: "#696969",
    textAlign: 'center',
  },
  helpText3:{
    fontSize: 15,
    marginTop: 15,
    color: "#696969",
    textAlign: 'center', 
  },
  roundBoxPlain:{
    borderColor: "#D5D5D5",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 30,
    marginLeft: 30,
    marginTop: 30,
    marginRight: 30,
  }
});