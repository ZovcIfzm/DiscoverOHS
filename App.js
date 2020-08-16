//Component imports
import React, {Component} from 'react';

//Redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducers/index';
const store = createStore(reducer);

//Navigator
import MainStackNavigator from './src/navigation/MainStackNavigator';

//App
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainStackNavigator />
      </Provider>
    );
  }
}
