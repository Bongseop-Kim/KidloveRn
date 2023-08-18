import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from './types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useQuery} from 'react-query';
import {getHospitalById} from '../api/hospital';

type HospitalScreenRouterProp = RouteProp<RootStackParamList, 'Hospital'>;

const HospitalScreen = () => {
  const {params} = useRoute<HospitalScreenRouterProp>();
  const {id} = params;

  const hospitalQuery = useQuery(['hospital', id], () => getHospitalById(id));
  const days = [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ];
  return (
    <View style={styles.block}>
      <Text>{hospitalQuery.data?.dutyName}</Text>
      <Text>{hospitalQuery.data?.dutyAddr}</Text>
      <Text>{hospitalQuery.data?.dutyTel1}</Text>
      {days.map((day, index) => (
        <Text key={index}>
          {day}: {hospitalQuery.data?.[`dutyTime${index + 1}s`]} ~
          {hospitalQuery.data?.[`dutyTime${index + 1}c`]}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default HospitalScreen;
