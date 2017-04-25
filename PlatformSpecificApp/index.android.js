import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
const PlatformSpecific = require('./PlatformSpecific');
AppRegistry.registerComponent('PlatformSpecificApp', () => PlatformSpecific);