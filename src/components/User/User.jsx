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
import GeneralInfoCard from "./userCards/GeneralInfoCard";
import MagicCard from "./userCards/MagicCard";
import FavouritesCard from "./userCards/FavouritesCard";
import DontsCard from "./userCards/DontsCard";
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
        justifyContent: "space-between",
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
    textField: {
        width: "400px",
        height: "200px",
    },
});

export default function User({ user }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    // const { user, dispatch } = useContext(userContext);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(true);
    const handleClickOpen = () => {
        setOpen(true);
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
                    Object.assign({}, formData, { surname: event.target.value })
                );
                break;
            case "avatar":
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
                break;
            case "motto":
                setFormData(
                    Object.assign({}, formData, { motto: event.target.value })
                );
                break;
            case "phone":
                setFormData(
                    Object.assign({}, formData, { phone: event.target.value })
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
                    Object.assign({}, formData, { hobbies: event.target.value })
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
                    Object.assign({}, formData, { books: event.target.value })
                );
                break;
            case "movies":
                setFormData(
                    Object.assign({}, formData, { movies: event.target.value })
                );
                break;
            case "music":
                setFormData(
                    Object.assign({}, formData, { music: event.target.value })
                );
                break;
            case "series":
                setFormData(
                    Object.assign({}, formData, { series: event.target.value })
                );
                break;
            case "animals":
                setFormData(
                    Object.assign({}, formData, { animals: event.target.value })
                );
                break;
            case "places":
                setFormData(
                    Object.assign({}, formData, { places: event.target.value })
                );
                break;
            case "dislike":
                setFormData(
                    Object.assign({}, formData, { dislike: event.target.value })
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
                        <Dialog
                            fullScreen
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
                                    onSubmit={changeUserData}>
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
                                        onChange={(event) =>
                                            handleChange(event, "places")
                                        }
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
