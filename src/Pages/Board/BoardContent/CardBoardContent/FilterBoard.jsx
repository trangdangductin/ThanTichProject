 import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
;
function FilterBoard() {
    const appliedFilter = [];
    return (
         <Box sx={{
        backgroundColor: 'grey.800',
        width: '50%',
        height: '30%',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
     
        padding: 2,
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: 2,
        }}>
            <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size='small'
          sx={{
            backgroundColor: 'white',
            borderRadius: 1,
            width: 500,
            marginBottom: 2,
            marginRight: 5,
          }} >
     
          </TextField>
          <SelectVariants/>
        
        </Box>
       <Box sx={{   
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 1,
            }}>
            <Button
                sx={{
                color: 'white',
                backgroundColor: 'black',
                borderRadius: 1,
                width: 100,
                }}
                onClick={() => {
                    appliedFilter.push('Xanh');
                }
            }
            >
                Xanh
            </Button>
            <Button
                sx={{
                color: 'white',
                backgroundColor: 'black',
                borderRadius: 1,
                width: 100,
                }}
            >
                Đỏ
            </Button>
             <Button
                sx={{
                color: 'white',
                backgroundColor: 'black',
                borderRadius: 1,
                width: 100,
                }       
            }          
            >
                Tím
            </Button>
             <Button
                sx={{
                color: 'white',
                backgroundColor: 'black',
                borderRadius: 1,
                width: 100,
            
                }}
            >
               Vàng
            </Button>
            

            </Box>
      
      </Box>
    )
}
export default FilterBoard


 function SelectVariants() {
  const [mode, setMode] = React.useState('');

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <div >
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: 200 }}>
        
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={mode}
          onChange={handleChange}
          label="Age"
        >
        
          <MenuItem value="Set1">Sơn Thánh Thủy Thần</MenuItem>
          <MenuItem value="Set2">Đại Thần Giáng Lâm</MenuItem>
         
        </Select>
      </FormControl>
    </div>
  );
}
