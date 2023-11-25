jest.mock('react-native-gesture-handler', () => {
  return {
    PanGestureHandler: jest.fn(),
    State: {},
  };
});
