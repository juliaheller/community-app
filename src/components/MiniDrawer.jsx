import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import GroupIcon from "@material-ui/icons/Group";
import ForumIcon from "@material-ui/icons/Forum";
import EventIcon from "@material-ui/icons/Event";
import SvgIcon from "@material-ui/core/SvgIcon";
import HomeIcon from "@material-ui/icons/Home";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "black",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    link: {
        textDecoration: "none",
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}>
                        <MenuIcon />
                    </IconButton>
                    <SvgIcon></SvgIcon>
                    <Link
                        className={classes.link}
                        style={{
                            color: "white",
                            display: "flex",
                            alignContent: "center",
                        }}
                        to="/">
                        <IconButton color="inherit">
                            <HomeIcon></HomeIcon>

                            <Typography variant="h6" noWrap>
                                {" "}
                                Tempel der Sophia
                            </Typography>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>

                <Divider />

                <List>
                    <Link className={classes.link} to="/messages">
                        <ListItem button>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Nachrichten" />
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemIcon>
                            <ForumIcon />
                        </ListItemIcon>
                        <ListItemText primary="Forum" />
                    </ListItem>
                    <Link className={classes.link} to="/events">
                        <ListItem button>
                            <ListItemIcon>
                                <EventIcon />
                            </ListItemIcon>
                            <ListItemText primary="Veranstaltungen" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <LocalLibraryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Buch der Schatten" />
                    </ListItem>
                    <Link className={classes.link} to="/schwestern">
                        <ListItem button>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                            <ListItemText primary="Schwestern" />
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemIcon>
                            <PhotoLibraryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Fotos" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}
