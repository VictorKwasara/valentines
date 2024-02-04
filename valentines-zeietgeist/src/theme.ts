import { createTheme } from '@mui/material/styles';
import '@fontsource/gloria-hallelujah';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
