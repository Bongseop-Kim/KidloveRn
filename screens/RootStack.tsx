import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import HospitalScreen from './HospitalScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';
import WriteScreen from './WriteScreen';

const RootStack = () => {
  useAuthLoadEffect();
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Hospital" component={HospitalScreen} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: '회원가입'}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: '로그인'}}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{title: '정보수정'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
