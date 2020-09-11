import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AuthHomeView from '../views/AuthHomeView';

const AuthHome = (props) => {
  return <AuthHomeView />;
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthHome);
