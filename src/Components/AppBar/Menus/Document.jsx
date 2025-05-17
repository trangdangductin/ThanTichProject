import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Document() {
 const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
 <div>
      <Button
        id="basic-button-elo"
        aria-controls={open ? 'basic-menu-elo' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{color: 'white'}}
      >
        Tài liệu
      </Button>
      <Menu
        id="basic-menu-cards-elo"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-elo',
        }}
      > 
        <MenuItem onClick={handleClose}>Thượng Thần Luật</MenuItem>
        <MenuItem onClick={handleClose}>Ban List</MenuItem>
        <MenuItem onClick={handleClose}>Thần Khí</MenuItem>
         
      </Menu>
    </div>
  )
}

export default Document
