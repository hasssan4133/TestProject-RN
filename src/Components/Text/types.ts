import {TextProps} from 'react-native';
import {TColors} from 'src/Config/GlobalStyles';
import {TypographyType} from 'src/Config/styles';

export interface ITextProps extends TextProps {
  color?: TColors;
  typography?: TypographyType;
  fontSize?: number;
  bold?: boolean;
  width?: string | number;
  paddingVertical?: number;
  marginTop?: number;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | undefined;
}
