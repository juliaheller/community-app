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
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

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
});

export default function User({ user }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const { user, dispatch } = useContext(userContext);
    // const [formData, setFormData] = useState({});
    // const [loading, setLoading] = useState(true);

    const test = {
        favourites: {
            places: "huhu",
        },
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
                {user.avatar ? (
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
                )}
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
                                    id="gods"
                                    label="Goettinnen & Goetter"
                                    value={user.gods}
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
                </div>
            </Paper>
        </div>
    );
}
