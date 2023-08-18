import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {Hospital} from '../screens/types';
import HospitalItem from './HospitalItem';

const ViewComponent = () => <View style={styles.seperator} />;

const Hospitals = ({hospitals}: {hospitals: Hospital[]}) => {
  const renderSeparator = () => <ViewComponent />;

  const renderFooter = () => (hospitals.length > 0 ? <ViewComponent /> : null);
  return (
    <FlatList
      data={hospitals}
      renderItem={({item}) => (
        <HospitalItem
          id={item.id}
          dutyName={item.dutyName}
          dutyAddr={item.dutyAddr}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      style={styles.list}
      ItemSeparatorComponent={renderSeparator}
      ListFooterComponent={renderFooter}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: '#cfd8dc',
  },
});

export default Hospitals;
