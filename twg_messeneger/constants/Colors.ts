const palette = {
  plum: {
    main: '#5603AD',
    light: '#C692FD',
    light_md: '#993AFC',
    dark_md: '#5603AD',
    dark: '#390273',
  },
  blue: {
    main: '#259DFA',
    light: '#F0F8FF',
    light_md: '#B6DEFD',
    dark: '#259DFA',
  },
  gray: {
    main: '#9FA2B2',
    light: '#D9DAE0',
    light_md: '#BFC1CC',
    dark: '#BFC1CC',
  },
  white: {
    main: '#FFFFFF',
  },
  black: {
    main: '#1A1A1A',
  },
  active: {
    main: '#A8FF76',
  },
  error: {
    main: '#FF445A',
  },
};

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: palette.blue.main,
    tabIconDefault: '#ccc',
    tabIconSelected: palette.plum.main,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: palette.black.main,
    tabIconDefault: '#ccc',
    tabIconSelected: palette.gray.light,
  },
};
