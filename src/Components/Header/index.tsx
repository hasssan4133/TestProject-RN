import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import View from '../View';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const Header = ({headerText, backButtonAction, basketCount}) => {
  const inset = useSafeAreaInsets();
  const nav = useNavigation();

  return (
    <View style={styles.header}>
      {headerText ? (
        <View style={styles.headerTextstyle}>
          <Text style={styles.backButtonText}>My Shop</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={backButtonAction}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={() => nav.navigate('Basket')}
        style={styles.basketContainer}>
        <Text style={styles.basketText}>🛒 {basketCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
