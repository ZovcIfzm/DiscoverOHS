import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as styles from './styles.js';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.goToHome = this.goToHome.bind(this);
  }

  goToHome() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
        <TouchableOpacity onPress={this.goToHome}>
          <Text>Go back to Home Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
