import React, { Component } from 'react';
import { Provider } from "react-redux";
import Navigation from './src/Navigator/Navigator'
import store from './src/Reducer/index'
import * as Sentry from '@sentry/react-native';

Sentry.init({ 
  dsn: 'https://ff3940b11e7c4e5fad0ae20efa9bd2cb@sentry.io/2815123',
  release: 'appinventiv-2j' 
});

// const configureSentry = () => {
//   Sentry.config(config.sentry.dsn).install();
//   Sentry.setDist(DeviceInfo.getBuildNumber());
//   Sentry.setRelease(`${DeviceInfo.getBundleId()}-${DeviceInfo.getVersion()}`);
// };

export default class createAccountBirthMain extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
