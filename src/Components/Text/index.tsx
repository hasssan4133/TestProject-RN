/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text as RNText} from 'react-native';
import globalStyles from 'src/Config/GlobalStyles';
import {fontRef, heightRef} from 'src/Config/ScreenSize';
import {TypographyStyles} from 'src/Config/Styles';
import {ITextProps} from './types';

const Text = ({
  color = 'PrimaryColor',
  typography = 'normal',
  fontSize = 24,
  bold,
  width,
  children,
  paddingVertical = 0,
  marginTop = 0,
  style,
  textAlignVertical = 'center',
  textAlign = 'center',
  onPress,
  ...rest
}: ITextProps) => {
  return (
    <RNText
      style={[
        {
          // @ts-ignore
          color: globalStyles.Theme[color] ?? color,
          fontWeight: bold !== undefined ? 'bold' : undefined,
          fontSize: fontSize * fontRef,
          paddingVertical: paddingVertical * heightRef,
          marginTop: marginTop * heightRef,
          textAlignVertical,
          textAlign,
        },
        TypographyStyles[typography],
        width !== undefined ? {width} : {},
        style,
      ]}
      onPress={onPress}
      {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
