import React from 'react'

import Box from '@mui/material/Box';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeICon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { SettingsBrightness } from '@mui/icons-material';
import Container from '@mui/material/Container';
import ModeSelect from '../../Components/ModeSelect/index.jsx';
import Appbar from '../../Components/AppBar/Appbar.jsx';
import BoardBar from './BoardBar/boardBar.jsx';
import BoardContent from './BoardContent/BoardContent.jsx';
function Board() {
   return (
    <>
    <Container disableGutters maxWidth="false" sx={{height: '100vh',}}>
     <Appbar />
     <BoardBar />
     <BoardContent />
   </Container>
    </>
      
  )
}

export default Board
