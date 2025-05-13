import React from 'react'
import ModeSelect from '../ModeSelect'
import { Box } from '@mui/material'

import Logo from '../../assets/Logo.png'
import AppIcons from '@mui/icons-material/Apps'
import {ReactComponent as StarIcon} from '../../assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Cards from './Menus/Cards'
import Elo from './Menus/Elo'
import Document from './Menus/Document'
import DeckBuider from './Menus/DeckBuidler'
import TextField from '@mui/material/TextField'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profile from './Menus/Profile'
function Appbar() {
  return (
    <Box px={1} sx={{ 
        backgroundColor: 'white ', 
        width:'100%',
        height: (theme)=> theme.thantichCustomObject.appBarHeight, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',}}> 
        
        <Box sx={{
            display: 'flex',
            alignItems: 'center',   
            gap: 2
        }}>
          <img className='logo' src={Logo} alt="logo" style={{
           width: 100,           
          }} /> 
         <Cards/>
         <Document/>
         <Elo/>
         <DeckBuider/>
          
        </Box>
          
         
        <Box sx={{
          display: 'flex',
            alignItems: 'center',   
            gap: 2
        }}> 
          <TextField id="outlined-search" label="Search..." type="search" size='small'/>
            <ModeSelect/>
            <HelpOutlineIcon fontSize='small' sx={{ color: 'gray' }}/>
            <Profile/>
        </Box>
        </Box>
  )
}

export default Appbar
