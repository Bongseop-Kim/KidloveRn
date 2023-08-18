import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {IconType} from '../screens/types';

export const UserIcon = ({color, size}: IconType) => (
  <MaterialIcons name="person" color={color} size={size} />
);
