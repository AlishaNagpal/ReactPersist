import React, { Component } from 'react';
import { Provider } from "react-redux";
import Navigation from './src/Navigator/Navigator'
import store from './src/Reducer/index'
import * as Sentry from '@sentry/react-native';

Sentry.init({ 
  dsn: 'https://ff3940b11e7c4e5fad0ae20efa9bd2cb@sentry.io/2815123', 
});
export default class createAccountBirthMain extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
