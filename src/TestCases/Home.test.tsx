import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {describe, expect, test} from '@jest/globals';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from '../Screens/Home/index';

// Mock the navigation hook from '@react-navigation/native'
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));

const mockStore = configureStore([]);

describe('<Home />', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      auth: {
        basket: [],
        data: [],
        counter: 0,
      },
    });

    store.dispatch = jest.fn();
  });

  it('renders correctly', () => {
    const {getByText} = render(
      <SafeAreaProvider>
        <Provider store={store}>
          <Home navigation={{} as any} />
        </Provider>
      </SafeAreaProvider>,
    );
  });
});
