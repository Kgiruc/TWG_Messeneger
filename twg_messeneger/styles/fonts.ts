import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  });
};

loadFonts();

export const fonts = {
  heading1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
  },
  heading2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
  },
  heading3: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
  },
  heading4: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    letterSpacing: 1,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  title_input: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    lineHight: 20,
  },
  caption: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    lineHight: 10,
  },
  bodyText: {
    fontSize: 14,
  },
  captionBold: {
    fontSize: 12,
    lineHight: 16,
  },
  specialText: {
    fontSize: 12,
    lineHight:16,
  },
};