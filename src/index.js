import React, { Component } from 'react';

import './config/ReactotronConfig';
import 'react-native-gesture-handler';

import Routes from './routes';

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
