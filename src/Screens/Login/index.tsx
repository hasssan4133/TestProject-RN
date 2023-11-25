import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const App = () => {
  const [chairCount, setChairCount] = useState(1);
  const [tableCount, setTableCount] = useState(1);

  return <View></View>;
};

const styles = StyleSheet.create({});

export default App;
