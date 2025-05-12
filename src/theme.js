
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  thantichCustomObject:{
    appBarHeight: '48px',
    boardBarHeight: '58px',
  },
  colorSchemes: { light: {
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: '#fff',
        paper: '#fff',
      },
      text: {
        primary: '#000',
        secondary: '#000',
      },
    },
  } , dark: {
    palette: {
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
      background: {
        default: '#121212',
        paper: '#121212',
      },
      text: {
        primary: '#fff',
        secondary: '#fff',
      },
    }
  } ,  },
  cssVariables: {
    colorSchemeSelector: 'class'
  }
});
export default theme;