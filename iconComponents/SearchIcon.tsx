import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {IconType} from '../screens/types';

export const SearchIcon = ({color, size}: IconType) => (
  <MaterialIcons name="search" color={color} size={size} />
);
