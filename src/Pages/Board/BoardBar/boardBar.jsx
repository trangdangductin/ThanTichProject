 import Box from '@mui/material/Box';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeICon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { SettingsBrightness } from '@mui/icons-material';
import Container from '@mui/material/Container';
 
 
 function boardBar() {
   return (
     <Box sx={{
      backgroundColor: 'primary.light', 
        width:'100%',
        height: (theme)=> theme.thantichCustomObject.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
     }}>
      boardBoard
     </Box>
   )
 }
 
 export default boardBar
 
 
 
