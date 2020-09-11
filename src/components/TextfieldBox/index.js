import React from 'react';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const TextfieldBox = (props) => {
  return (
    <View style={styles.box}>
      <TextInput
        style={styles.textfield}
        placeholder={props.placeholder}
        value={props.text}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
};

BarTextField.defaultProps = {
  placeholder: '',
  onChangeText: () => {},
  onSubmit: () => {},
};

BarTextField.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default React.memo(BarTextField);
