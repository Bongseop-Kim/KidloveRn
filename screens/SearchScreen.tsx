import React from 'react';

import {useQuery} from 'react-query';

import {getHospitals} from '../api/hospital';
import {ActivityIndicator, StyleSheet} from 'react-native';
import Hospitals from '../components/Hospitals';

const SearchScreen = () => {
  const {data} = useQuery('hospitals', () => getHospitals('우리'));

  if (!data) {
    return <ActivityIndicator size="large" style={styles.spinner} />;
  }

  return <Hospitals hospitals={data.data[0][0]} />;
};
const styles = StyleSheet.create({
  spinner: {
    flex: 1,
  },
  flatList: {
    backgroundColor: 'white',
    flex: 1,
  },
  flatListContent: {
    paddingHorizontal: 12,
  },
});
export default SearchScreen;
