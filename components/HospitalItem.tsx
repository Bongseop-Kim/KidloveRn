import React from 'react';
import {StyleSheet, Pressable, Text, View, Platform} from 'react-native';
import {Hospital, MainTabNavigationProp} from '../screens/types';
import {useNavigation} from '@react-navigation/native';

type HospitalItemProp = Pick<Hospital, 'dutyName' | 'id' | 'dutyAddr'>;

const HospitalItem = ({id, dutyAddr, dutyName}: HospitalItemProp) => {
  const navigation = useNavigation<MainTabNavigationProp>();
  const onPress = () => {
    navigation.navigate('Hospital', {
      id,
    });
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && styles.pressed,
      ]}
      onPress={onPress}
      android_ripple={{color: '#eeeeee'}}>
      <Text style={styles.title}>{dutyName}</Text>
      <View style={styles.footer}>
        <Text style={styles.smallText}>{dutyAddr}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  pressed: {
    backgroundColor: '#eeeeee',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 16,
  },
  smallText: {
    fontSize: 10,
    color: '#546e7a',
  },
});

export default HospitalItem;
