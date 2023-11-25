import {ImageProps} from 'react-native';
import {TColors} from 'src/Config/GlobalStyles';

export interface IImage extends ImageProps {
  size?: number;
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  color?: TColors;
  border?: boolean;
  bgColor?: TColors;
}
