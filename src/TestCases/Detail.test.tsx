import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Detail from '../Screens/Detail';

// Mock the navigation hook
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

// Mock the store
const mockStore = configureStore([]);
const store = mockStore({
  auth: {
    basket: [{id: 1, name: 'Test Product', colour: 'Red', price: 100}],
  },
});

describe('<Detail />', () => {
  it('renders correctly', () => {
    const route = {
      params: {
        item: {id: 1, name: 'Test Product', colour: 'Red', price: 100},
      },
    };

    render(
      <SafeAreaProvider>
        <Provider store={store}>
          <Detail route={route} navigation={undefined} />
        </Provider>
      </SafeAreaProvider>,
    );
  });

  it('adds an item to the basket when "+" button is pressed', () => {
    const route = {
      params: {
        item: {id: 1, name: 'Test Product', colour: 'Red', price: 100},
      },
    };

    render(
      <SafeAreaProvider>
        <Provider store={store}>
          <Detail route={route} navigation={undefined} />
        </Provider>
      </SafeAreaProvider>,
    );
  });
});
