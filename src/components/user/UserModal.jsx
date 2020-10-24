// Libraries
import React, { useContext, useState, useEffect } from "react";

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

const useStyles = makeStyles({
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
    },
    textField: {
        width: "400px",
        height: "200px",
    },
    btns: {
        display: "flex",
        justifyContent: "space-between",
    },
});

export default function UserModal({ user, open, setOpen }) {
    const classes = useStyles();
    // const { user, dispatch } = useContext(userContext);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
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
        []
        // [user]
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
                        experience: event.target.value,
                    })
                );
                break;
            case "interest":
                setFormData(
                    Object.assign({}, formData, {
                        interest: event.target.value,
                    })
                );
                break;
            case "gods":
                setFormData(
                    Object.assign({}, formData, { gods: event.target.value })
                );
                break;
            case "powerAnimal":
                setFormData(
                    Object.assign({}, formData, {
                        powerAnimal: event.target.value,
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
                    Object.assign({}, formData, { food: event.target.value })
                );
                break;
            case "books":
                setFormData(
                    Object.assign({}, formData, {
                        books: event.target.value,
                    })
                );
                break;
            case "movies":
                setFormData(
                    Object.assign({}, formData, {
                        movies: event.target.value,
                    })
                );
                break;
            case "music":
                setFormData(
                    Object.assign({}, formData, {
                        music: event.target.value,
                    })
                );
                break;
            case "series":
                setFormData(
                    Object.assign({}, formData, {
                        series: event.target.value,
                    })
                );
                break;
            case "animals":
                setFormData(
                    Object.assign({}, formData, {
                        animals: event.target.value,
                    })
                );
                break;
            case "places":
                setFormData(
                    Object.assign({}, formData, {
                        places: event.target.value,
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
        // UserService.updateUser(formData._id, formData)
        //     .then((response) => {
        //         if (response.errors) {
        //             console.log(response.errors);
        //         } else {
        //             setFormData(response);
        //             dispatch({ type: "saveUser", userData: response });
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Profil bearbeiten</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Bitte fuelle die Felder so weit wie moeglich aus, damit
                    deine Schwestern dich besser kennenlernen koemmen.
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
                        variant="filled"
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
                        multilineonChange={(event) =>
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
                        variant="filled"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "hobbies")
                        }></TextField>

                    <TextField
                        className={classes.textField}
                        id="magicExperience"
                        label="Magische Erfahrungen"
                        // value={formData.magic.experience}
                        variant="filled"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "experience")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="magicInterests"
                        label="Magische Interessen"
                        // value={formData.magic.interest}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "interest")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="gods"
                        label="Goettinnen & Goetter"
                        // value={formData.magic.gods}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "gods")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="gods"
                        label="Krafttier(e)"
                        // value={formData.magic.powerAnimal}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "powerAnimal")
                        }></TextField>
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
                    <TextField
                        className={classes.textField}
                        id="food"
                        label="Lieblingsessen"
                        // value={formData.favourites.food}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "food")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="books"
                        label="Lieblingsbuecher"
                        // value={formData.favourites.books}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "books")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="music"
                        label="Lieblingsmusik"
                        // value={formData.favourites.music}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "music")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="movies"
                        label="Lieblingsfilme"
                        // value={formData.favourites.movies}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "movies")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="series"
                        label="Lieblingsserien"
                        // value={formData.favourites.series}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "series")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="animals"
                        label="Lieblings-/Krafttiere"
                        // value={formData.favourites.animals}
                        variant="outlined"
                        multiline
                        onChange={(event) =>
                            handleChange(event, "animals")
                        }></TextField>
                    <TextField
                        className={classes.textField}
                        id="places"
                        label="Lieblingsorte"
                        // value={formData.favourites.places}
                        variant="outlined"
                        multilin
                        onChange={(event) => handleChange(event, "places")}
                        e></TextField>
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
                        className={classes.submit}
                        onClick={handleClose}>
                        Save
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
}
