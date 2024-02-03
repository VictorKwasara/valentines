import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#7b0112',
      contrastText:"hsl(358,16%,90%)"
    },
    secondary: {
      main: '#BE0744',
    },
  },
});

export default theme;
