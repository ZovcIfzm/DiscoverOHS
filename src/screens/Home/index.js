import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import {Card, Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Card containerStyle={styles.titleCard}>
            <Image
              source={require('../../assets/OHSlogo.png')}
              style={styles.OHSlogo}
            />
            <Text style={styles.titleText}> DiscoverOHS </Text>
          </Card>
          <Card containerStyle={styles.infoCard}>
            <Text style={styles.instructionText}>Swipe up to move forward</Text>
          </Card>
          <Card containerStyle={styles.infoCard}>
            <Text style={styles.instructionText}>
              Swipe right/left to rotate
            </Text>
          </Card>
          <Card containerStyle={styles.infoCard}>
            <Text style={styles.instructionText}>
              Swipe down to return home
            </Text>
          </Card>
          <Card containerStyle={styles.infoCard}>
            <Button title="Begin" />
          </Card>
          <Card containerStyle={styles.infoCard}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontFamily: 'Candara',
              }}>
              Note: there is some lag when loading pictures
            </Text>
          </Card>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
