// Libraries
import React, { useContext, useState, useEffect } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Divider } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

// Components
import GeneralInfoCard from "./GeneralInfoCard";
import MagicCard from "./MagicCard";

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
    form: {
        display: "flex",
        // flexDirection: "column",
        padding: "6px",
        flexWrap: "wrap",
        margin: "auto",
        width: "fit-content",
        height: "500px",
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
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        height: "100%",
        width: "100%",
    },
});

export default function User({ user }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    // const { user, dispatch } = useContext(userContext);
    // const [formData, setFormData] = useState({});
    // const [loading, setLoading] = useState(true);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(
        () => {
            //     if (!_.isEmpty(user)) {
            //         console.log("user:", user);
            //         setFormData(user);
            //         setLoading(false);
            // }
        },
        []
        // [user]
    );

    // const handleChange = (event, type) => {
    //     // switch (type) {
    //     //     case "name":
    //     //         setFormData(
    //     //             Object.assign({}, formData, { name: event.target.value })
    //     //         );
    //     //         break;
    //     //     case "surname":
    //     //         setFormData(
    //     //             Object.assign({}, formData, { surname: event.target.value })
    //     //         );
    //     //         break;
    //     //     case "avatar":
    //     //         let file = event.target.files[0];
    //     //         let reader = new FileReader();
    //     //         reader.onloadend = () => {
    //     //             console.log("image changed");
    //     //             setFormData(
    //     //                 Object.assign({}, formData, {
    //     //                     avatar: reader.result,
    //     //                 })
    //     //             );
    //     //         };
    //     //         reader.readAsDataURL(file);
    //     //         break;
    //     //     default:
    //     //         break;
    //     // }
    // };
    // const changeUserData = (event) => {
    //     event.preventDefault();
    //     UserService.updateUser(formData._id, formData)
    //         .then((response) => {
    //             if (response.errors) {
    //                 console.log(response.errors);
    //             } else {
    //                 setFormData(response);
    //                 dispatch({ type: "saveUser", userData: response });
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };
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
                            // onChange={(event) => {
                            //     handleChange(event, "avatar");
                            // }}
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
                        <div style={{ display: "flex", alignItems: "center" }}>
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
                            <MagicCard user={user} />
                        </div>
                        <Button
                            variant="outlined"
                            color="default"
                            onClick={handleClickOpen}
                            style={{ justifySelf: "flex-end" }}>
                            <EditIcon></EditIcon> Profil bearbeiten
                        </Button>{" "}
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">
                                Profil bearbeiten
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Bitte fuelle die Felder so weit wie moeglich
                                    aus, damit deine Schwestern dich besser
                                    kennenlernen koemmen.
                                </DialogContentText>
                                <form
                                    className={classes.form}
                                    // onSubmit={changeUserData}
                                >
                                    <TextField
                                        id="name"
                                        type="text"
                                        label={user.surname}
                                        // value={formData.name}
                                        variant="outlined"
                                        // onChange={(event) =>
                                        //     handleChange(event, "name")}
                                    ></TextField>
                                    <TextField
                                        label={user.name}
                                        id="surname"
                                        type="text"
                                        // value={formData.surname}
                                        variant="outlined"
                                        // onChange={(event) =>
                                        //     handleChange(event, "surname")
                                        // }
                                    ></TextField>
                                    <TextField
                                        id="motto"
                                        label="Motto"
                                        value={user.motto}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="email"
                                        label={user.email}
                                        variant="outlined"
                                        disabled></TextField>
                                    <TextField
                                        id="email"
                                        label={user.phone}
                                        variant="outlined"
                                        disabled></TextField>
                                    <TextField
                                        id="birth"
                                        label="Geburtsdatum"
                                        value={user.birthDate}
                                        variant="outlined"></TextField>
                                    <TextField
                                        id="birthPlace"
                                        label="Geburtsort"
                                        value={user.birthPlace}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="job"
                                        label="Beruf"
                                        variant="outlined"
                                        value={user.job}
                                        multiline></TextField>
                                    <TextField
                                        id="education"
                                        label="Ausbildung/Studium"
                                        value={user.education}
                                        variant="outlined"
                                        multiline></TextField>
                                    <Divider />
                                    <TextField
                                        id="children"
                                        label="Kind(er)"
                                        value={user.children}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="pets"
                                        label="Haustiere"
                                        value={user.pets}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="hobbies"
                                        label="Hobbies"
                                        value={user.hobbies}
                                        variant="outlined"
                                        multiline></TextField>

                                    <TextField
                                        id="magicExperience"
                                        label="Magische Erfahrungen"
                                        value={user.magic.experience}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="magicInterests"
                                        label="Magische Interessen"
                                        value={user.magic.interest}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="gods"
                                        label="Goettinnen & Goetter"
                                        value={user.magic.gods}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="gods"
                                        label="Krafttier(e)"
                                        value={user.magic.powerAnimal}
                                        variant="outlined"
                                        multiline></TextField>
                                    <Divider />
                                    <TextField
                                        id="allergies"
                                        label="Allergien & Abneigungen"
                                        value={user.allergies}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="food"
                                        label="Lieblingsessen"
                                        value={user.favourites.food}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="books"
                                        label="Lieblingsbuecher"
                                        value={user.favourites.books}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="music"
                                        label="Lieblingsmusik"
                                        value={user.favourites.music}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="movies"
                                        label="Lieblingsfilme"
                                        value={user.favourites.movies}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="series"
                                        label="Lieblingsserien"
                                        value={user.favourites.series}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="animals"
                                        label="Lieblings-/Krafttiere"
                                        value={user.favourites.animals}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="places"
                                        label="Lieblingsorte"
                                        value={user.favourites.places}
                                        variant="outlined"
                                        multiline></TextField>
                                    <TextField
                                        id="dislike"
                                        label="Ich mag nicht ..."
                                        value={user.dislike}
                                        variant="outlined"
                                        multiline></TextField>
                                </form>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>

                                <div className={classes.btns}>
                                    <Button
                                        style={{
                                            alignSelf: "flex-end",
                                            fontSize: "13px",
                                            margin: "16px",
                                        }}
                                        color="secondary">
                                        delete account
                                    </Button>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        style={{
                                            backgroundColor: "#3788d8",
                                            margin: "16px",
                                            width: "150px",
                                            alignSelf: "flex-end",
                                            color: "white",
                                        }}
                                        className={classes.submit}>
                                        Save
                                    </Button>
                                </div>
                            </DialogActions>
                        </Dialog>
                    </Paper>
                </div>
            </Paper>
        </div>
    );
}
