// Libraries
import React, { useState, useEffect } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

// redux
import { updateUser } from '../../redux/user/user.actions';
import store from "../../redux/store";

// Services
import userService from '../../services/user.service';

const useStyles = makeStyles((theme) => ({
    form: {
        display: "flex",
        // flexDirection: "column",
        padding: "6px",
        flexWrap: "wrap",
        margin: "auto",
        width: "fit-content",
        height: "500px",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#5B6489",
    },
    textField: {
        width: "400px",
        height: "200px",
        color: "#5B6489",
    },
    btns: {
        display: "flex",
        justifyContent: "space-between",
        secondary: theme.secondary,
    },
    btn: {
        backgroundColor: theme.primaray,
        color: "#1C304A",
    },
}));

export default function UserModal({ user, open, setOpen }) {
    const classes = useStyles();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const [showSnackbar, setShowSnackbar] = useState(false); 
    const [alertMessage, setAlertMessage] = useState("");


    const onSnackbarClose = (event) => {
        setShowSnackbar(false);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(
        () => {
            if (user.id) {
                setFormData(user);
                setLoading(false);
            }
        },
        [user]
    );

    const handleChange = (event, type) => {
        switch (type) {
            case "name":
                setFormData(
                    Object.assign({}, formData, { name: event.target.value })
                );
                break;
            case "surname":
                setFormData(
                    Object.assign({}, formData, {
                        surname: event.target.value,
                    })
                );

                break;
            case "motto":
                setFormData(
                    Object.assign({}, formData, {
                        motto: event.target.value,
                    })
                );
                break;
                case "address":
                setFormData(
                    Object.assign({}, formData, {
                        address: event.target.value,
                    })
                );
                break;
            case "phone":
                setFormData(
                    Object.assign({}, formData, {
                        phone: event.target.value,
                    })
                );
                break;
            case "birthDate":
                setFormData(
                    Object.assign({}, formData, {
                        birthDate: event.target.value,
                    })
                );
                break;
            case "birthPlace":
                setFormData(
                    Object.assign({}, formData, {
                        birthPlace: event.target.value,
                    })
                );
                break;
            case "job":
                setFormData(
                    Object.assign({}, formData, { job: event.target.value })
                );
                break;
            case "education":
                setFormData(
                    Object.assign({}, formData, {
                        education: event.target.value,
                    })
                );
                break;
            case "children":
                setFormData(
                    Object.assign({}, formData, {
                        children: event.target.value,
                    })
                );
                break;
            case "pets":
                setFormData(
                    Object.assign({}, formData, { pets: event.target.value })
                );
                break;
            case "hobbies":
                setFormData(
                    Object.assign({}, formData, {
                        hobbies: event.target.value,
                    })
                );
                break;
            case "experience":
                setFormData(
                    Object.assign({}, formData, {
                        magic: { experience: event.target.value },
                    })
                );
                break;
            case "interest":
                setFormData(
                    Object.assign({}, formData, {
                        magic: { interest: event.target.value },
                    })
                );
                break;
            case "gods":
                setFormData(
                    Object.assign({}, formData, {
                        magic: { gods: event.target.value },
                    })
                );
                break;
            case "powerAnimal":
                setFormData(
                    Object.assign({}, formData, {
                        magic: { powerAnimal: event.target.value },
                    })
                );
                break;
            case "allergies":
                setFormData(
                    Object.assign({}, formData, {
                        allergies: event.target.value,
                    })
                );
                break;
            case "food":
                setFormData(
                    Object.assign({}, formData, {
                        favourites: { food: event.target.value },
                    })
                );
                break;
            case "books":
                setFormData(
                    Object.assign({}, formData, {
                        favourites: { books: event.target.value },
                    })
                );
                break;
            case "movies":
                setFormData(
                    Object.assign({}, formData, {
                        favourites: { movies: event.target.value },
                    })
                );
                break;
            case "music":
                setFormData(
                    Object.assign({}, formData, {
                        favourites: { music: event.target.value },
                    })
                );
                break;
            case "series":
                setFormData(
                    Object.assign({}, formData, {
                        favourites: { series: event.target.value },
                    })
                );
                break;
            case "animals":
                setFormData(
                    Object.assign({}, formData, {
                        favourites: { animals: event.target.value },
                    })
                );
                break;
            case "places":
                setFormData(
                    Object.assign({}, formData, {
                        favourites: { places: event.target.value },
                    })
                );
                break;
            case "dislike":
                setFormData(
                    Object.assign({}, formData, {
                        dislike: event.target.value,
                    })
                );
                break;
            default:
                break;
        }
    };
    const changeUserData = (event) => {
        event.preventDefault();
        try {
            store.dispatch(updateUser(formData.id, formData));
            handleClose();
        } catch (error) {
            setShowSnackbar(true);
            setAlertMessage(error);
        }
    };

    const deleteAccount = (event) => {
        event.preventDefault();
        // let confirmation = confirm("Willst du wirklich deinen Account löschen? Dies kann nicht rückgängig gemacht werden!"); // user
        // if (confirmation){
        //         try {
        //             userService.deleteUser(formData.id);
        //             handleClose();
        //         } catch (error) {
        //             setShowSnackbar(true);
            // setAlertMessage(error);
        //         }
        // }
    }
    
    return (
        loading? <h1>Loading</h1> :
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
                 <Snackbar
                open={showSnackbar}
                autoHideDuration={3000}
                onClose={onSnackbarClose}>
                <Alert
                    onClose={onSnackbarClose}
                    severity="error"
                    variant="filled">
                    {alertMessage}
                </Alert>
                </Snackbar>
            <DialogTitle id="form-dialog-title">Profil bearbeiten</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Bitte fuelle die Felder so weit wie moeglich aus, damit
                    deine Hexen-Schwestern dich besser kennenlernen koennen.
                </DialogContentText>
                <form className={classes.form} onSubmit={changeUserData}>
                    <TextField
                        className={classes.textField}
                        id="surname"
                        type="text"
                        label={user.surname}
                        value={formData.surname}
                        variant="outlined"
                        onChange={(event) =>
                            handleChange(event, "surname")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        label={user.name}
                        id="name"
                        type="text"
                        value={formData.name}
                        variant="outlined"
                        onChange={(event) =>
                            handleChange(event, "name")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="motto"
                        label="Motto"
                        value={formData.motto}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "motto")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="email"
                        label="Email"
                        value={formData.email}
                        variant="standard"
                        disabled></TextField>
                         <TextField
                        className={classes.textField}
                        id="address"
                        label="Adresse"
                        value={formData.address}
                        variant="outlined"
                        onChange={(event) =>
                            handleChange(event, "address")
                        }
                        ></TextField>
                    <TextField
                        className={classes.textField}
                        id="phone"
                        label="Telefonnummer"
                        value={formData.phone}
                        variant="outlined"
                        onChange={(event) =>
                            handleChange(event, "phone")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="birth"
                        label="Geburtsdatum"
                        value={formData.birthDate}
                        variant="outlined"
                        onChange={(event) =>
                            handleChange(event, "birthDate")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="birthPlace"
                        label="Geburtsort"
                        value={formData.birthPlace}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "birthPlace")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="job"
                        label="Beruf"
                        variant="outlined"
                        value={formData.job}
                        multiline
                        onChange={(event) =>
                            handleChange(event, "job")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="education"
                        label="Ausbildung/Studium"
                        value={formData.education}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "education")
                        }></TextField>
                    <Divider />
                    <TextField
                        className={classes.textField}
                        id="children"
                        label="Kind(er)"
                        value={formData.children}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "children")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="pets"
                        label="Haustiere"
                        value={formData.pets}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "pets")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="hobbies"
                        label="Hobbies"
                        value={formData.hobbies}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "hobbies")
                        }></TextField>
                    {formData.magic ? (
                        <div className={classes.form}>
                            <TextField
                                className={classes.textField}
                                id="magicExperience"
                                label="Magische Erfahrungen"
                                value={formData.magic.experience}
                                variant="outlined"
                                multiline
                                onChange={(event) => {
                                    handleChange(event, "experience");
                                }}></TextField>
                            <TextField
                                className={classes.textField}
                                id="magicInterests"
                                label="Magische Interessen"
                                value={formData.magic.interest}
                                variant="outlined"
                                multiline
                                onChange={(event) =>
                                    handleChange(event, "interest")
                                }></TextField>
                            <TextField
                                className={classes.textField}
                                id="gods"
                                label="Goettinnen & Goetter"
                                value={formData.magic.gods}
                                variant="outlined"
                                multiline
                                onChange={(event) =>
                                    handleChange(event, "gods")
                                }></TextField>
                            <TextField
                                className={classes.textField}
                                id="gods"
                                label="Krafttier(e)"
                                value={formData.magic.powerAnimal}
                                variant="outlined"
                                multiline
                                onChange={(event) =>
                                    handleChange(event, "powerAnimal")
                                }></TextField>
                        </div>
                    ) : (
                        ""
                    )}

                    <Divider />
                    <TextField
                        className={classes.textField}
                        id="allergies"
                        label="Allergien & Abneigungen"
                        value={formData.allergies}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "allergies")
                        }></TextField>
                    {formData.favourites ? (
                        <div className={classes.form}>
                            <TextField
                                className={classes.textField}
                                id="food"
                                label="Lieblingsessen"
                                value={formData.favourites.food}
                                variant="outlined"
                                multiline
                                onChange={(event) =>
                                    handleChange(event, "food")
                                }></TextField>
                            <TextField
                                className={classes.textField}
                                id="books"
                                label="Lieblingsbuecher"
                                value={formData.favourites.books}
                                variant="outlined"
                                multiline
                                onChange={(event) =>
                                    handleChange(event, "books")
                                }></TextField>
                            <TextField
                                className={classes.textField}
                                id="music"
                                label="Lieblingsmusik"
                                value={formData.favourites.music}
                                variant="outlined"
                                multiline
                                onChange={(event) =>
                                    handleChange(event, "music")
                                }></TextField>
                            <TextField
                                className={classes.textField}
                                id="movies"
                                label="Lieblingsfilme"
                                value={formData.favourites.movies}
                                variant="outlined"
                                multiline
                                onChange={(event) =>
                                    handleChange(event, "movies")
                                }></TextField>
                            <TextField
                                className={classes.textField}
                                id="series"
                                label="Lieblingsserien"
                                value={formData.favourites.series}
                                variant="outlined"
                                multiline
                                onChange={(event) =>
                                    handleChange(event, "series")
                                }></TextField>
                            <TextField
                                className={classes.textField}
                                id="animals"
                                label="Lieblings-/Krafttiere"
                                value={formData.favourites.animals}
                                variant="outlined"
                                multiline
                                onChange={(event) =>
                                    handleChange(event, "animals")
                                }></TextField>
                            <TextField
                                className={classes.textField}
                                id="places"
                                label="Lieblingsorte"
                                value={formData.favourites.places}
                                variant="outlined"
                                multiline
                                onChange={(event) =>
                                    handleChange(event, "places")
                                }></TextField>
                        </div>
                    ) : (
                        ""
                    )}

                    <TextField
                        className={classes.textField}
                        id="dislike"
                        label="Ich mag nicht ..."
                        value={formData.dislike}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "dislike")
                        }></TextField>
                </form>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    color="primary"
                    className={classes.btns}>
                    Cancel
                </Button>

                <div className={classes.btns}>
                    <Button
                        style={{
                            alignSelf: "flex-end",
                            fontSize: "13px",
                            margin: "16px",
                        }}
                        className={classes.btn}
                        color="secondary"
                        onClick={event => deleteAccount(event)}>
                        Account loeschen
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style={{
                            backgroundColor: "#660099",
                            margin: "16px",
                            width: "150px",
                            alignSelf: "flex-end",
                            color: "white",
                        }}
                        className={classes.submit}
                        onClick={(event) => changeUserData(event)}>
                        Speichern
                    </Button>
                </div>
            </DialogActions>
            
        </Dialog>
    )
}
