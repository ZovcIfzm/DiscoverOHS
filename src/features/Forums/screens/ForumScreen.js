import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ForumsView from '../views/ForumsView';

const Forums = (props) => {
  return <ForumsView />;
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Forums);
