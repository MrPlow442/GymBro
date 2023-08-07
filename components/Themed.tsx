/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { 
  Text as DefaultText, 
  useColorScheme, 
  View as DefaultView,
  TextInput as DefaultTextInput,
  StyleSheet
} from 'react-native';

import Colors from '@/constants/Colors';
import { 
  ButtonProps,
  Button as DefaultButton 
} from './Button';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ThemedTextProps = ThemeProps & DefaultText['props'];
export type ThemedTextInputProps = ThemeProps & DefaultTextInput['props'];
export type ThemedViewProps = ThemeProps & DefaultView['props'];
export type ThemedButtonProps = ThemeProps & ButtonProps

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function ThemedText(props: ThemedTextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function ThemedTextInput(props: ThemedTextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'primary')

  return <DefaultTextInput style={[
    {color, borderColor}, 
    styles.textInput,
    style
  ]} {...otherProps} />;
}

export function ThemedButton(props: ThemedButtonProps) {
  const { style, pressStyle, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'primaryButton')
  const backgroundColorPressed = useThemeColor({ light: lightColor, dark: darkColor }, 'primaryButtonPressed')

  return <DefaultButton 
    style={[
      styles.button, 
      {backgroundColor}, 
      style
    ]} 
    // pressStyle={{ 
    //   backgroundColor: backgroundColorPressed, 
    //   ...pressStyle 
    // }} 
    {...otherProps} />
}

export function ThemedView(props: ThemedViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
    textInput: {
      borderWidth: 1, 
      borderRadius: 5
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 5,
      elevation: 3
    }
})