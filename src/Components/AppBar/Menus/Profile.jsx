import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar } from '@mui/material';
import Kaguya from '../../../assets/Kaguya.jpg';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
function Profile() {
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
    
      <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ padding: 0 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
             <Avatar sx={{
        width: 32,
        height: 32,
        marginRight: '10px',
        backgroundColor: '#1976d2',
       }
       } src={Kaguya} alt="Kaguya" />
          </IconButton>
        </Tooltip>
      <Menu
        id="basic-menu-cards-account"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-account',
        }}
      > 
       <MenuItem >
          <Avatar sx={{width: '28px',height:'28px', mr: 2}} /> Profile
        </MenuItem>
        <MenuItem >
          <Avatar sx={{width: '28px', height: '28px', mr: 2}}/> My account
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Profile
