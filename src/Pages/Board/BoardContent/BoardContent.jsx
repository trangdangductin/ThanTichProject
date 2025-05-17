 import Box from '@mui/material/Box';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeICon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { SettingsBrightness } from '@mui/icons-material';
import Container from '@mui/material/Container';
import BasicTable from '../../../Components/EloBoard/EloBoard.jsx';
import Cards from '../../../Components/CardHolder/Cards.jsx';
import { TextField } from '@mui/material';
import FilterBoard from './CardBoardContent/FilterBoard.jsx';
function BoardContent() {
  return (
  <Box sx={{
      backgroundColor: 'primary.main', 
        width:'100%',
        height: (theme)=> `calc(100vh - ${theme.thantichCustomObject.appBarHeight})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      
     }}>
      <FilterBoard/>
     </Box>
  )
}

export default BoardContent
