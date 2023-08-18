import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {IconType} from '../screens/types';

export const HomeIcon = ({color, size}: IconType) => (
  <MaterialIcons name="home" color={color} size={size} />
);
