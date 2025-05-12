import React from 'react'
import ModeSelect from '../ModeSelect'
import Box from '@mui/material/Box';
function Appbar() {
  return (
    <Box sx={{ 
        backgroundColor: 'primary.dark', 
        width:'100%',
        height: (theme)=> theme.thantichCustomObject.appBarHeight, 
        display: 'flex',
        alignItems: 'center'}}>
        <ModeSelect/>
        </Box>
  )
}

export default Appbar
