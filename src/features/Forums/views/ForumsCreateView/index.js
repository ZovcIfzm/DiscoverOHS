import React, {useState} from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import TextfieldBox from '../../../../components/TextfieldBox';
import * as styles from './styles.js.js';

const ForumsCreateView = (props) => {
  const [title, onChangeTitle] = useState('');

  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <TextfieldBox
        text={title}
        onChangeText={onChangeTitle}
        placeholder={'Enter title'}
      />
    </View>
  );
};

ForumsCreateView.propTypes = {};

export default ForumsCreateView;
