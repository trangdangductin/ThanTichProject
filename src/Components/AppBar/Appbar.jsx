import React from 'react'
//import ModeSelect from '../ModeSelect'
import { Box } from '@mui/material'

import Logo from '../../assets/Logo.png'
import AppIcons from '@mui/icons-material/Apps'
import {ReactComponent as StarIcon} from '../../assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Cards from '../CardHolder/Cards'
import Elo from './Menus/Elo'
import Document from './Menus/Document'
import DeckBuider from './Menus/DeckBuidler'
import TextField from '@mui/material/TextField'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profile from './Menus/Profile'
function Appbar() {
  return (
    <Box px={0.5} sx={{ 
        backgroundColor: '#2f4f4f',
        width:'100%',
        height: (theme)=> theme.thantichCustomObject.appBarHeight, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
        gap: 2,
    
        }}> 
        
        <Box sx={{
            display: 'flex',
            alignItems: 'center',   
            gap: 1
        }}>
          <Box sx={{
            display: {
              xs: 'none',
              md: 'flex',
              gap: 1
            }
          }}>
             <Cards/>
         <Document/>
         <Elo/>
         <DeckBuider/>
          </Box>
        
          
        </Box>
        <Box pr={10}>
          <img className='logo' src={Logo} alt="logo" style={{
           width: 150,
           padding: 0,           
          }} /> 
        </Box>
         
        <Box sx={{
          display: 'flex',
            alignItems: 'center',   
            gap: 2
        }}> 
          <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{minWidth: '120px'}} />
            <HelpOutlineIcon fontSize='small' sx={{ color: 'gray' }}/>
            <Profile/>
        </Box>
        </Box>
  )
}

export default Appbar
