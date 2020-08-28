import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import * as styles from './styles.js';

export class Event extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.event_title}</Text>
      </View>
    );
  }
}

Event.propTypes = {
  event_title: PropTypes.string.isRequired,
};
