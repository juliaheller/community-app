
// Libraries
import React from 'react';
import { Link } from "react-router-dom";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HamburgerMenu from './HamburgerMenu';

// Redux
import { useSelector } from 'react-redux';
import { logout } from '../../redux/auth/auth.actions';
import store from '../../redux/store';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const auth = useSelector(state => state.auth)
 


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    store.dispatch(logout());
    handleClose()
  }

 

 return(
  auth.isLoggedIn ? 
      <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
       <HamburgerMenu></HamburgerMenu>
       
        <Typography variant="h6" className={classes.title}>
        Tempel der Sophia          </Typography>
        {auth.isLoggedIn && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
             <Link to="/profile"><MenuItem onClick={handleClose}>Mein Profil</MenuItem></Link>
             <Link to="/login"><MenuItem onClick={logoutUser}>Logout</MenuItem></Link>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  </div> : <div></div>
 )  
}
