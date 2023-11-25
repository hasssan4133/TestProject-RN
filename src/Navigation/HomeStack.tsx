import React from 'react';
import Home from 'src/Screens/Home';
import Detail from 'src/Screens/Detail';
import Basket from 'src/Screens/Basket';
import {createStackNavigator} from '@react-navigation/stack';
import {TScreen, THomeStack} from './types';
const Stack = createStackNavigator<THomeStack>();

const screens: TScreen<THomeStack>[] = [
  {
    key: 'home',
    name: 'Home',
    component: Home,
  },
  {
    key: 'detail',
    name: 'Detail',
    component: Detail,
  },
  {
    key: 'basket',
    name: 'Basket',
    component: Basket,
  },
];

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      {screens.map(s => (
        <Stack.Screen
          key={s.key}
          name={s.name}
          component={s.component}
          options={s?.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;
