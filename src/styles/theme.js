import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    appBackground: 'white',
    primary: {
      main: '#2877CC',
    },
    secondary: {
      main: '#D8932B',
    },
    tertiary: {
      main: '#28B8CC',
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    appBackground: 'rgb(35,35,35)',
    primary: {
      main: '#103359',
    },
    secondary: {
      main: '#B27520',
    },
    tertiary: {
      main: '#105059',
    },
  },
});