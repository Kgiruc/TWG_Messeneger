import { StyleSheet } from 'react-native';
import palette from '../styles/colors';
import { fonts } from '../styles/fonts';

export const navigationStyles = StyleSheet.create({
  header: {
    backgroundColor: palette.blue.light_md,
    height: 100,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    ...fonts.heading2,
    color: palette.plum.main,
  },
  chatHeaderContainer: {
    flexDirection: 'row',
    marginLeft: -20,
    gap: 12,
    maxWidth: 200,
  },
  chatHeaderText: {
    ...fonts.title_chat,
    color: palette.plum.main,
  },
});

export default navigationStyles;