import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from "@material-ui/core/ListItem";
import MailIcon from "@material-ui/icons/Mail";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import GroupIcon from "@material-ui/icons/Group";
import ForumIcon from "@material-ui/icons/Forum";
import EventIcon from "@material-ui/icons/Event";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
},
icon: {
    color: "#1C304A",
},
text: {
    color: "#1C304A",
},
});
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function HamburgerMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
                 <MenuIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>
    <Link className={classes.link} to="/messages">
        <ListItem button>
                <ListItemIcon>
                    <MailIcon  className={classes.icon}/>
                </ListItemIcon>
                <ListItemText className={classes.text}
                    
                    primary="Nachrichten"
                />
         </ListItem> 
    </Link>
</StyledMenuItem>
            
<StyledMenuItem onClick={handleClose}>
        <Link className={classes.link} to="/forum">
            <ListItem button>
                <ListItemIcon>
                    <ForumIcon  className={classes.icon}/>
                </ListItemIcon>
                <ListItemText className={classes.text}
                    
                    primary="Forum"
                />
            </ListItem>
        </Link>
        </StyledMenuItem>

        <StyledMenuItem onClick={handleClose}>
        <Link className={classes.link} to="/events">
            <ListItem button>
                <ListItemIcon>
                    <EventIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText className={classes.text}
                    
                    primary="Veranstaltungen"
                />
            </ListItem>
        </Link>
        </StyledMenuItem>
    <StyledMenuItem onClick={handleClose}>
        <Link className={classes.link} to="/bookofshadows">
            <ListItem button>
                <ListItemIcon>
                    <LocalLibraryIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText className={classes.text}
                    
                    primary="Buch der Schatten"
                />
            </ListItem>
        </Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
        <Link className={classes.link} to="/witches">
            <ListItem button>
                <ListItemIcon>
                    <GroupIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText className={classes.text}
                    
                    primary="Hexen"
                />
            </ListItem>
        </Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
        <Link className={classes.link} to="/photos">
            <ListItem button>
                <ListItemIcon>
                    <PhotoLibraryIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText className={classes.text}
                    
                    primary="Fotos"
                />
            </ListItem>
        </Link>
        </StyledMenuItem>
 
      </StyledMenu>
    </div>
  );
}



