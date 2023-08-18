import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackNavigationProp} from './types';
import MenuItem from '../components/MenuItem';
import {useUserState} from '../contexts/UserContext';
import {clearToken} from '../api/client';
import authStorage from '../storage/authStorage';

const UserMenuScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const [user, setUser] = useUserState();
  const onLogin = () => navigation.navigate('Login');
  const onRegister = () => navigation.navigate('Register');
  const onLogout = () => {
    setUser(null);
    clearToken();
    authStorage.clear();
  };
  const onWrite = () => navigation.navigate('Write');

  return (
    <View>
      {user ? (
        <>
          <View style={styles.block}>
            <Text>이름 : {user.name}</Text>
            <Text>이메일 : {user.email}</Text>
            <Text>번호 : {user.phoneNumber}</Text>
            <Text>주소 : {user.address}</Text>
          </View>
          <MenuItem name="정보수정" onPress={onWrite} />
          <MenuItem name="로그아웃" onPress={onLogout} />
        </>
      ) : (
        <>
          <MenuItem name="로그인" onPress={onLogin} />
          <MenuItem name="회원가입" onPress={onRegister} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: 'white',
    borderBottomColor: '#eeeeee',
    borderBottomWidth: 1,
    display: 'flex',
    gap: 6,
  },
  pressed: {
    backgroundColor: '#eeeeee',
  },
});

export default UserMenuScreen;
