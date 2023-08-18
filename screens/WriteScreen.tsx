import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

import {useUserState} from '../contexts/UserContext';
import {kakaoGeoApi} from '../api/map';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from './types';
import {updateUser} from '../api/user';

const WriteScreen = () => {
  const [user, _] = useUserState();
  const navigation = useNavigation<RootStackNavigationProp>();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [address, setAddress] = useState(user?.address || '');
  const [userLat, setUserLat] = useState(0);
  const [userLon, setUserLon] = useState(0);

  const onGeo = async () => {
    Geolocation.getCurrentPosition(async info => {
      setAddress(
        info.coords.latitude.toString() + info.coords.longitude.toString(),
      );
      setUserLat(info.coords.latitude);
      setUserLon(info.coords.longitude);

      //   const res = await revertApi(
      //     info.coords.latitude.toString(),
      //     info.coords.longitude.toString(),
      //   );
      //   console.log(res.documents[0].x);

      //   const res = await kakaoGeoApi(
      //     info.coords.latitude.toString(),
      //     info.coords.longitude.toString(),
      //   );
      const res = await kakaoGeoApi('127.423084873712', '37.0789561558879');

      if (res.documents) {
        setAddress(res.documents[0].address.address_name);
      } else {
        setAddress('올바르지 않은 주소입니다.');
      }
    });
  };

  const onSubmit = async () => {
    try {
      await await updateUser({
        name,
        email,
        phoneNumber,
        address,
        userLat,
        userLon,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const onCLose = () => navigation.pop();

  return (
    <KeyboardAvoidingView
      style={styles.block}
      behavior={Platform.select({ios: 'padding'})}>
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          placeholder="계정명"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="이메일"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="번호"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          autoCapitalize="none"
        />
        <Pressable onPress={onGeo}>
          {/* <TextInput
            placeholder="주소"
            value={address}
            onChangeText={setAddress}
            autoCapitalize="none"
          /> */}
          <Text style={styles.input}>{address ?? '주소'}</Text>
        </Pressable>

        <Pressable
          style={({pressed}) => [
            styles.submit,
            Platform.OS === 'ios' && pressed && styles.submitPressed,
          ]}
          android_ripple={{color: '#42a5f5'}}
          onPress={onSubmit}>
          <Text style={styles.submitText}>수정하기</Text>
        </Pressable>
        <Pressable
          style={({pressed}) => [
            styles.submit,
            Platform.OS === 'ios' && pressed && styles.submitPressed,
          ]}
          android_ripple={{color: '#42a5f5'}}
          onPress={onCLose}>
          <Text style={styles.submitText}>닫기</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  input: {
    backgroundColor: 'white',
    padding: 8,
    borderColor: '#dddddd',
    borderWidth: 1,
    marginBottom: 8,
  },
  submit: {
    marginTop: 24,
    backgroundColor: '#2196f3',
    height: 56,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitPressed: {
    opacity: 0.75,
  },
  submitText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WriteScreen;
