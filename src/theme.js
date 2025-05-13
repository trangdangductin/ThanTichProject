
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  thantichCustomObject:{
    appBarHeight: '58px',
    boardBarHeight: '58px',
  },
  colorSchemes: { light: {
    palette: {
      primary: {
        main: '#5f9ea0',
      },
      secondary: {
        main: '#008b8b',
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
        main: '#808080',
      },
      secondary: {
        main: '#696969',
      },
      background: {
        default: '#696969',
        paper: '#696969',
      },
      text: {
        primary: '#434A56',
        secondary: '#434A56',
      },
    }
  } ,  },
  cssVariables: {
    colorSchemeSelector: 'class'
  }
});
export default theme;