// Libraries
import React, { useContext, useState, useEffect } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
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
        // maxHeight: "500px",
        // minHeight: "500px",
    },
    large: {
        width: "200px",
        height: "200px",
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
        margin: "16px",
        width: "100%",
        height: "500px",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    input: {
        // display: "none",
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
});

export default function User({ user }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    console.log(user);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const { user, dispatch } = useContext(userContext);
    // const [formData, setFormData] = useState({});
    // const [loading, setLoading] = useState(true);

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
                <Avatar
                    alt={user.surname}
                    src={user.avatar}
                    className={classes.large}
                />

                <input
                    id="contained-button-file"
                    accept="image/*"
                    className={classes.input}
                    type="file"
                    // onChange={(event) => {
                    //     handleChange(event, "avatar");
                    // }}
                />
                {/* {user.avatar ? (
                        <label htmlFor="contained-button-file">
                            <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                style={{
                                    backgroundColor: "#3788d8",
                                }}>
                                Change profile picture
                            </Button>
                        </label>
                    ) : (
                        <label htmlFor="contained-button-file">
                            <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                style={{
                                    backgroundColor: "#3788d8",
                                }}>
                                Add profile picture
                            </Button>
                        </label>
                    )} */}
                <Typography variant="h4">
                    {user.name + " " + user.surname}
                </Typography>
                <Typography variant="subtitle1">
                    {/* Joined: {moment(user.createdAt).format("MMMM DD, YYYY")} */}
                </Typography>
            </Paper>
            <Paper className={classes.paper}>
                <div>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClickOpen}>
                        <EditIcon></EditIcon> Profil bearbeiten
                    </Button>
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
                                    label="Vorname"
                                    // value={formData.name}
                                    variant="outlined"
                                    // onChange={(event) =>
                                    //     handleChange(event, "name")}
                                ></TextField>
                                <TextField
                                    label="Nachname"
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
                                    variant="outlined"></TextField>
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    disabled></TextField>
                                <TextField
                                    id="birth"
                                    label="Geburtsdatum"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="birthPlace"
                                    label="Geburtsort"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="job"
                                    label="Beruf"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="education"
                                    label="Ausbildung / Studium"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="children"
                                    label="Kind(er)"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="pets"
                                    label="Haustiere"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="hobbies"
                                    label="Hobbies"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="gods"
                                    label="Goettinnen & Goetter"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="magicExperience"
                                    label="Magische Erfahrungen"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="magicInterests"
                                    label="Magische Interessen"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="food"
                                    label="Lieblingsessen"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="allergies"
                                    label="Allergien & Abneigungen"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="books"
                                    label="Lieblingsbuecher"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="music"
                                    label="Lieblingsmusik"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="movies"
                                    label="Lieblingsfilme"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="series"
                                    label="Lieblingsserien"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="animals"
                                    label="Lieblings-/Krafttiere"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="places"
                                    label="Lieblingsorte"
                                    variant="outlined"></TextField>
                                <TextField
                                    id="dislike"
                                    label="Ich mag nicht ..."
                                    variant="outlined"></TextField>
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
                </div>
            </Paper>
        </div>
    );
}
