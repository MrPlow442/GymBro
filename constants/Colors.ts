const primary = "#FCBA03";
const primaryTinted = '#594201';
const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  primary: primary,
  light: {
    primary: primary,      
    primaryButton: primary,
    primaryButtonPressed: primaryTinted,
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    primary: primary,    
    primaryButton: primary,
    primaryButtonPressed: primaryTinted,
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
