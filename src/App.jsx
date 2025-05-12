
import Box from '@mui/material/Box';

import {
  useColorScheme,
} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeICon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { SettingsBrightness } from '@mui/icons-material';
import Container from '@mui/material/Container';
 function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
   const selectedMode = event.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
      
        <MenuItem value='light'>
        <div style={{ display: 'flex', alignItems: 'center' , gap: 1}}>
        <LightModeICon fontSize='small'/>
        Light
        </div>
        </MenuItem>
        <MenuItem value='dark'>
        <div style={{ display: 'flex', alignItems: 'center' , gap: 1}}>
        <DarkModeIcon fontSize='small'  />
        Dark
        </div>
        </MenuItem>
        
        <MenuItem value='system'>
        <div style={{ display: 'flex', alignItems: 'center' , gap: 1 }}>
        <SettingsBrightness fontSize='small'/>
        system
         </div>
        </MenuItem>
       
      </Select>
    </FormControl>
  );
}


function App() {
  return (
    <>
    <Container disableGutters maxWidth="false" sx={{height: '100vh',}}>
      <Box sx={{ 
        backgroundColor: 'primary.dark', 
        width:'100%',
        height: (theme)=> theme.thantichCustomObject.appBarHeight, 
        display: 'flex',
        alignItems: 'center'}}>
        <ModeSelect/>
        </Box>
     <Box sx={{
      backgroundColor: 'primary.light', 
        width:'100%',
        height: (theme)=> theme.thantichCustomObject.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
     }}>
      Content
     </Box>
     <Box sx={{
      backgroundColor: 'primary.main', 
        width:'100%',
        height: (theme)=> `calc(100vh - ${theme.thantichCustomObject.appBarHeight} - ${theme.thantichCustomObject.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
     }}>
      Content
     </Box>
   </Container>
    </>
      
  )
}

export default App
