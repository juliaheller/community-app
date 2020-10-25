import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
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
        backgroundColor: "#613291",
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
        justifyContent: "space-between",

        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    toolbarBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    link: {
        textDecoration: "none",
    },
    icon: {
        color: "#1C304A",
    },
    text: {
        color: "#1C304A",
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
                <Toolbar className={classes.toolbar}>
                    <div className={classes.toolbarBox}>
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
                    </div>
                    <Button
                        aria-controls={open ? "menu-list-grow" : undefined}
                        aria-haspopup="true"
                        color="inherit">
                        <Avatar
                            alt=""
                            // src={user.avatar}
                        />
                    </Button>
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
                                <MailIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText
                                className={classes.text}
                                primary="Nachrichten"
                            />
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/forum">
                        <ListItem button>
                            <ListItemIcon>
                                <ForumIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText
                                className={classes.text}
                                primary="Forum"
                            />
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/events">
                        <ListItem button>
                            <ListItemIcon>
                                <EventIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText
                                className={classes.text}
                                primary="Veranstaltungen"
                            />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link className={classes.link} to="/bookofshadows">
                        <ListItem button>
                            <ListItemIcon>
                                <LocalLibraryIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText
                                className={classes.text}
                                primary="Buch der Schatten"
                            />
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/witches">
                        <ListItem button>
                            <ListItemIcon>
                                <GroupIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText
                                className={classes.text}
                                primary="Hexen"
                            />
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/photos">
                        <ListItem button>
                            <ListItemIcon>
                                <PhotoLibraryIcon className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText
                                className={classes.text}
                                primary="Fotos"
                            />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </div>
    );
}
