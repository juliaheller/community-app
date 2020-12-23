// Libraries
import React, { useState } from "react";

// Material UI
import {makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

// Components
import GeneralInfoCard from "./userCards/GeneralInfoCard";
import MagicCard from "./userCards/MagicCard";
import FavouritesCard from "./userCards/FavouritesCard";
import DontsCard from "./userCards/DontsCard";
import UserModal from "./UserModal.jsx";

// redux
import { updateUser } from '../../redux/user/user.actions';
import store from "../../redux/store";
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginTop: "100px",
    },
    paper: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        height: "100%",
        width: "100%",
        color: "#5B6489",
    },
    large: {
        width: "200px",
        height: "200px",
        clipPath: "circle(100px at center)",
        objectFit: "cover",
        marginBottom: "-20px",
    },
    placeholder: {
        width: "50px",
        height: "40px",
        marginBottom: "40px",
    },
    witches: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    input: {
        display: "none",
        width: "100%",
        // visibility: "hidden",
        height: "50px",
        borderBottom: "1px solid darkgrey",
        textAlign: "center",
    },
    btn: {
        backgroundColor: theme.primaray,
        color: "#1C304A",
    },
    cardContent: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        height: "100%",
        width: "100%",
    },
    backgroundPic: {
        width: "100%",
        height: "350px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    backgroundPicBtn: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
    },
    cardBox: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "16px",
        height: "100%",
        width: "100%",
    },
    icon: {
        color: "#1C304A",
    },
}));

export default function User({ user }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const {me} = useSelector(state => state.auth);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange =  (event, type) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = async () => {
            console.log("image changed");//
   
            await changePic(reader.result, type) 
            
        };
        reader.readAsDataURL(file);
      
    };

    const changePic =  (picture, type) => {    
        const newValues = {};
        newValues[type] = picture;
        try {
            store.dispatch(updateUser(user.id, newValues))
        } catch (error) {
            console.log(error);
        }
    };


    if (!user.id) {
        return <div></div>;
    }
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.cardContent}>
            
                {me.id === user.id ? <div className={classes.backgroundPicBtn}>
                    <input
                            id="contained-button"
                            accept="image/*"
                            className={classes.input}
                            type="file"
                            onChange={(event) => {
                                handleChange(event, "backgroundPic");
                            }}
                        />
                           {user.backgroundPic ? (
                            <label htmlFor="contained-button">
                                <Button
                                    variant="contained"
                                    color="default"
                                    component="span"
                                    className={classes.btn}
                                    style={{
                                        width: "50px",
                                        marginTop: "40px",
                                    }}>
                                    <EditIcon></EditIcon>
                                </Button>
                            </label>
                        ) : (
                            <label htmlFor="contained-button">
                                <Button
                                    variant="contained"
                                    color="default"
                                    component="span"
                                    style={{
                                        backgroundColor: "#5b6489",
                                        color: "white"
                                    }}
                                    className={classes.btn}>
                                    Hintergrundbild hinzufügen
                                </Button>
                            </label> )}
                           </div> : ""}
                    <div
                        className={classes.backgroundPic}
                        style={{
                            backgroundImage: `url(${user.backgroundPic})`,
                        }}>
                          
                          
                        <img
                            alt={user.surname}
                            src={user.avatar}
                            className={classes.large}
                        />
                    </div>

                    <Paper
                        className={classes.paper}
                        style={{
                            marginTop: "-70px",
                            width: "90%",
                        }}>
                      {me.id === user.id ?   <div><input
                            id="contained-button-file"
                            accept="image/*"
                            className={classes.input}
                            type="file"
                            onChange={(event) => {
                                handleChange(event, "avatar");
                            }}
                        />   
                        {user.avatar ? (
                            <label htmlFor="contained-button-file">
                                <Button
                                    variant="contained"
                                    color="default"
                                    component="span"
                                    className={classes.btn}
                                    style={{
                                        width: "50px",
                                        marginTop: "40px",
                                    }}>
                                    <EditIcon></EditIcon>
                                </Button>
                            </label>
                        ) : (
                            <label htmlFor="contained-button-file">
                                <Button
                                    variant="contained"
                                    color="default"
                                    component="span"
                                    style={{
                                        backgroundColor: "#5b6489",
                                        color: "white"
                                    }}
                                    className={classes.btn}>
                                    Bild hinzufügen
                                </Button>
                            </label>
                        )}</div> : <div className={classes.placeholder}></div>}
                        <Typography style={{ color: "#1C304A" }} variant="h4">
                            {user.surname + " " + user.name}
                        </Typography>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}>
                            <EmailIcon className={classes.icon} />
                            <Typography display="inline" variant="subtitle1">
                                {user.email}
                            </Typography>
                            <PhoneIcon className={classes.icon} />
                            <Typography display="inline" variant="subtitle1">
                                {user.phone}
                            </Typography>
                        </div>
                        <Typography
                            variant="body2"
                            style={{ color: "#1C304A" }}
                            component="p">
                            "{user.motto}"
                        </Typography>
                        <div className={classes.cardBox}>
                            <GeneralInfoCard user={user} />
                            <FavouritesCard user={user} />
                            <DontsCard user={user} />
                            <MagicCard user={user} />
                        </div>
                        {me.id === user.id ?
                        <Button
                            variant="outlined"
                            color="default"
                            onClick={handleClickOpen}>
                            <EditIcon></EditIcon> Profil bearbeiten
                        </Button> : ""}
                        <UserModal user={user} open={open} setOpen={setOpen} />
                    </Paper>
                </div>
            </Paper>
        </div>
    );
}
