import {AppRegistry} from 'react-native';
import Router from './src/router/index';
import {name as appName} from './app.json';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import storages from './src/storages/store';
import React, {Component} from 'react';

const {store, persistor} = storages();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
