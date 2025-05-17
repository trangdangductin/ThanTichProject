import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Cards() {
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
        sx={{color: 'white'}}
        id="basic-button-cards"
        aria-controls={open ? 'basic-menu-cards' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
      >
        Cards
      </Button>
      <Menu
        id="basic-menu-cards"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-cards',
        }}
      > 
        <MenuItem onClick={handleClose}>Thần </MenuItem>
        <MenuItem onClick={handleClose}>Lính</MenuItem>
        <MenuItem onClick={handleClose}>Phép</MenuItem>
        <MenuItem onClick={handleClose}>Xanh</MenuItem>
        <MenuItem onClick={handleClose}>Đỏ</MenuItem>
        <MenuItem onClick={handleClose}>Tím</MenuItem>
        <MenuItem onClick={handleClose}>Vàng</MenuItem>
      </Menu>
    </div>
  )
}

export default Cards
