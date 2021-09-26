import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
// import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
            <Box>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Login</Button>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar
