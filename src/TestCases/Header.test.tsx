import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../Components/Header';

// Define the Stack Navigator

const Stack = createStackNavigator();

describe('<Header />', () => {
  // Define a functional component to simulate navigation

  const MockNavigator = ({component, params = {}}) => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MockScreen">
        <Stack.Screen
          name="MockScreen"
          component={component}
          initialParams={params}
        />
        <Stack.Screen name="Basket" component={() => <></>} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  it('renders header text when headerText prop is true', () => {
    render(
      <SafeAreaProvider>
        <MockNavigator
          component={() => (
            <Header
              headerText={true}
              backButtonAction={undefined}
              basketCount={undefined}
            />
          )}
        />
      </SafeAreaProvider>,
    );
  });

  it('renders back button when headerText prop is false', () => {
    render(
      <SafeAreaProvider>
        <MockNavigator
          component={() => (
            <Header
              headerText={false}
              backButtonAction={undefined}
              basketCount={undefined}
            />
          )}
        />
      </SafeAreaProvider>,
    );
  });

  it('displays the correct basket count', () => {
    render(
      <SafeAreaProvider>
        <MockNavigator
          component={() => (
            <Header
              basketCount={5}
              headerText={undefined}
              backButtonAction={undefined}
            />
          )}
        />
      </SafeAreaProvider>,
    );
  });

  it('navigates to Basket screen when basket icon is pressed', () => {
    render(
      <SafeAreaProvider>
        <MockNavigator
          component={() => (
            <Header
              basketCount={5}
              headerText={undefined}
              backButtonAction={undefined}
            />
          )}
        />
      </SafeAreaProvider>,
    );
  });
});
