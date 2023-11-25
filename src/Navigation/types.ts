import {ParamListBase, RouteProp} from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';

export type TAuthStack = {
  Login: undefined;
};

export type THomeStack = {
  Home: undefined;
  Detail: undefined;
};

export type THomeScreen<T extends keyof THomeStack> = React.FC<
  StackScreenProps<THomeStack, T>
>;
export type TAuthScreen<T extends keyof TAuthStack> = React.FC<
  StackScreenProps<TAuthStack, T>
>;

declare type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: StackNavigationProp<ParamList>;
    }>
  | React.ComponentType<{}>;

export type TScreen<Stack extends ParamListBase> = {
  key: React.Key;
  name: keyof Stack;
  component: ScreenComponentType<Stack, keyof Stack> | React.FC<any>;
  options?: StackNavigationOptions;
};
