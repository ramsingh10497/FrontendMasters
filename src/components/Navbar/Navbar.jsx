import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import styles from './Navbar.module.css'


const MyComponent = styled('button')({
  color: 'white',
    backgroundColor: 'rgb(193,58,42)',
  padding: '10px 20px',
  borderRadius: "40px",
  marginLeft: '5px',
  border: 'none',
  textAlign: 'center',
  textDecoration: 'none',
  lineHeight: '1.5em',
  fontFamily: 'sans-serif',
  fontSize: '16px',
  cursor: 'pointer',
 
});


const Navbar = () => {
    // const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor: 'rgb(63,21,12)', padding:"5px 30px"}}>
        <Toolbar>
        
            <div style={{ flexGrow: 1}}>
              <Box className={styles.FMlogo}>
          </Box>
          </div>
            <Box className={styles.front}>
                        <Button color="inherit">Courses</Button>
                        <Button color="inherit">Learn</Button>
                        <Button color="inherit">Prices</Button>
                        <Button color="inherit">Login</Button>
                        <MyComponent color="inherit">Join Now</MyComponent>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar
