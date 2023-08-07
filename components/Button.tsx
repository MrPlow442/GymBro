import {
    Pressable as DefaultPressable,
    ViewStyle,
    StyleProp
} from 'react-native'

import { PressableProps as RNPressableProps } from 'react-native/Libraries/Components/Pressable/Pressable';

export interface ButtonProps extends Omit<RNPressableProps, 'style'> {
    style?: StyleProp<ViewStyle>
    pressStyle?: ViewStyle
  }
  

type PressableStylesMergeFn = (    
    style?: StyleProp<ViewStyle>, 
    pressStyle?: ViewStyle
    ) => RNPressableProps["style"]
  
  const pressableStylesMerge: PressableStylesMergeFn = (style, pressStyle) => {
    if (!pressStyle) {
      return style
    } else if (!style) {
      return ({pressed}) => pressed ? pressStyle : undefined
    } else {
      return ({pressed}) => pressed ? pressStyle : style
    }
  }
  
  
export function Button(props: ButtonProps) {
    const { style, pressStyle, ...otherProps } = props;
    return <DefaultPressable style={pressableStylesMerge(style, pressStyle)} {...otherProps} />
}