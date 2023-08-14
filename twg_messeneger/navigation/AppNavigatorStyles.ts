import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import palette from '../styles/colors';
import { fonts } from '../styles/fonts';

export const navigationStyles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
  },
  headerStyles: {
    backgroundColor: palette.blue.main
  },
  headerTitle: {
    ...fonts.heading1,
    color: palette.plum.main
  }
});

export type NavigationStylesType = {
    headerRightContainer: ViewStyle;
    headerStyles: ViewStyle;
    headerTitle: TextStyle;
  };