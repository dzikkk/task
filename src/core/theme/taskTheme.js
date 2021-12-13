import { createTheme } from "@material-ui/core";

const colors = {
  white: '#ffffff',
  red: '#ff0000',
  green: '#00ff00',
};

export const taskTheme = createTheme({
  palette: {
    primary: {
      main: '#AEAEBA',
      dark: '#525252',
    },
    background: {
      default: '#24292E',
      paper: '#363D4D'
    },
    text: {
      primary: colors.white,
      secondary: colors.green,
      hint: colors.red,
    }
    
  }
})