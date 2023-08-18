import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import {MainTabParamList} from './types';
import {HomeIcon} from '../iconComponents/HomeIcon';
import SearchScreen from './SearchScreen';
import {SearchIcon} from '../iconComponents/SearchIcon';
import UserMenuScreen from './UserMenuScreen';
import {UserIcon} from '../iconComponents/UserIcon';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '아이 사랑',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: SearchIcon,
        }}
      />
      <Tab.Screen
        name="UserMenu"
        component={UserMenuScreen}
        options={{
          title: '사용자 메뉴',
          tabBarIcon: UserIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
