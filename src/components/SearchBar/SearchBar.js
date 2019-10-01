import React, {useEffect} from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({...props} = this.props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      <View style={styles.container}>
        <Icon name={'search'} color={'gray'} size={35} />
        <TextInput style={{flex: 1}} {...props} />
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    alignItems: 'center',
    alignContent: 'center',
    height: 40,
    width: 300,
    borderRadius: 15,
    borderWidth: 0,
    margin: 5,
    flexDirection: 'row',
    backgroundColor: '#e5e4ea',
  },
});
