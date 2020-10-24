// Libraries
import React, { useContext, useState, useEffect } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles({
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
    },
    large: {
        width: "200px",
        height: "200px",
        clipPath: "circle(100px at center)",
        objectFit: "cover",
        marginBottom: "-20px",
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
    btns: {
        display: "flex",
        justifyContent: "space-between",
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
    cardBox: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "16px",
        height: "100%",
        width: "100%",
    },
});

export default function User({ user }) {
    const classes = useStyles();
    const [formData, setFormData] = useState({});
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleChange = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            console.log("image changed");
            setFormData(
                Object.assign({}, formData, {
                    avatar: reader.result,
                })
            );
        };
        reader.readAsDataURL(file);
    };

    if (!user.id) {
        return <div></div>;
    }
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.cardContent}>
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
                        <input
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
                                        backgroundColor: "#3788d8",
                                    }}>
                                    Bild hinzufuegen
                                </Button>
                            </label>
                        )}
                        <Typography variant="h4">
                            {user.surname + " " + user.name}
                        </Typography>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                justifyContent: "center",
                            }}>
                            <EmailIcon />
                            <Typography display="inline" variant="subtitle1">
                                {user.email}
                            </Typography>
                            <PhoneIcon />
                            <Typography display="inline" variant="subtitle1">
                                {user.phone}
                            </Typography>
                        </div>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p">
                            "{user.motto}"
                        </Typography>
                        <div className={classes.cardBox}>
                            <GeneralInfoCard user={user} />
                            <FavouritesCard user={user} />
                            <MagicCard user={user} />
                            <DontsCard user={user} />
                        </div>
                        <Button
                            variant="outlined"
                            color="default"
                            onClick={handleClickOpen}>
                            <EditIcon></EditIcon> Profil bearbeiten
                        </Button>{" "}
                        <UserModal user={user} open={open} setOpen={setOpen} />
                    </Paper>
                </div>
            </Paper>
        </div>
    );
}
