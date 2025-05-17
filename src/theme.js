
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          textTransform: 'none',
        },
      },
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root: ({theme}) => ({
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            },
            '&hover': {'.MuiOutlinedInput-notchedOutline' :{
              borderColor: theme.palette.primary.main,
            },      
          },
            '& fieldset': {
              borderColor: theme.palette.primary.main,
              borderWidth: '1px !important',
            },
      })
    },
  },
    MuiInputLabel:{
      root: ({theme}) => (
        {
          color: theme.palette.primary.main,  
          fontSize: '0.875rem',
        }
      )
    }
  },
  thantichCustomObject:{
    appBarHeight: '58px',
    boardBarHeight: '58px',
  },
  colorSchemes: { 
    light: {
    palette: {
      primary: {
        main: '#008b8b',
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
  } , 
  
  },
  cssVariables: {
    colorSchemeSelector: 'class'
  }
  
});
export default theme;