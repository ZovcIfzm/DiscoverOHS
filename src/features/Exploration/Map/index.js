import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as styles from './styles.js';

class Map extends Component {
  constructor(props) {
    super(props);
    this.goToHome = this.goToHome.bind(this);
    this.goToExplore = this.goToExplore.bind(this);
  }

  goToHome() {
    this.props.navigation.navigate('Home');
  }

  goToExplore() {
    this.props.navigation.navigate('Explore', {
      location: 'frontOfSchool',
      direction: {a: 'hi', b: 'nope'},
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
        <TouchableOpacity onPress={this.goToHome}>
          <Text>Go back to Home Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.goToExplore}>
          <Text>Start at front of school</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
