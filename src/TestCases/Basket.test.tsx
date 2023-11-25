import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import configureStore from 'redux-mock-store';

import Basket from '../Screens/Basket/index';

// Mock child components
jest.mock(
  'src/Components/Text',
  () =>
    ({children}) =>
      children,
);
jest.mock('src/Components/Image', () => () => 'Image');
jest.mock('src/Components/Header', () => () => 'Header');
jest.mock(
  'src/Components/View',
  () =>
    ({children}) =>
      children,
);

const mockStore = configureStore([]);
const initialState = {
  auth: {
    basket: [
      {
        id: 1,
        name: 'Test Item',
        colour: 'Red',
        price: 99.99,
        img: 'test_image_url',
      },
    ],
  },
};

describe('<Basket />', () => {
  it('renders correctly', async () => {
    const navigationMock = {
      goBack: jest.fn(),
      navigate: jest.fn(),
      setOptions: jest.fn(),
    };

    const {findByText, debug} = render(
      <SafeAreaProvider>
        <Provider store={mockStore(initialState)}>
          <Basket navigation={navigationMock} route={{}} />
        </Provider>
      </SafeAreaProvider>,
    );

    // Using debug to print the current render status
    debug();
  });
});
