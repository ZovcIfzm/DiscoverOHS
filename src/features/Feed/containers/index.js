import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Event} from '../components/index';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as styles from './styles.js';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.goToHome = this.goToHome.bind(this);
    this.goToCreateEvent = this.goToCreateEvent.bind(this);
    this.goToMap = this.goToMap.bind(this);
  }

  goToHome() {
    this.props.navigation.navigate('Home');
  }

  goToCreateEvent() {
    this.props.navigation.navigate('CreateEvent');
  }

  goToMap() {
    this.props.navigation.navigate('Map');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
        <TouchableOpacity onPress={this.goToHome}>
          <Text>Go back to Home Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToCreateEvent}>
          <Text>Create an Event</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.goToMap}>
          <Text>goToMap</Text>
        </TouchableOpacity>

        <Event event_title={'its an event title'} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
