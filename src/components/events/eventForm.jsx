// Libraries
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "date-fns";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

// Services
import eventsService from "../../services/events.service";
import userService from "../../services/user.service";
const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        padding: "6px",
        marginTop: "100px",
        width: "fit-content",
        height: "500px",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        color: "#5B6489",
    },
    textField: {
        width: "80vw",
    },
    image: {
        height: "300px",
        objectFit: "cover",
    },
    input: {
        display: "none",
        width: "100%",
        height: "50px",
        borderBottom: "1px solid darkgrey",
        textAlign: "center",
    },
    label: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
    },
    editor: {
        width: "100%",
    },
    btn: {
        color: "#1C304A",
        display: "flex",
        justifyContent: "space-between",
        width: "20%",
    },
    submitBtn: {
        marginTop: 50,
        padding: 10,
    },
    formControl: {
        margin: 10,
        minWidth: 120,
        maxWidth: 300,
    },
});

export default function EventForm({ params }) {
    const classes = useStyles();
    const history = useHistory();
    const defaultValues = {
        title: "",
        location: "",
        image: "",
        start: {
            date: new Date(),
            time: "2021-12-01T07:20:50.52Z",
        },
        end: {
            date: new Date(),
            time: "2021-12-01T07:20:50.52Z",
        },
        attendees: [{}],
        isAllDay: false,
    };
    const [formValues, setFormValues] = useState(defaultValues);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const [selectedStartDate, setSelectedStartDate] = React.useState(
        new Date()
    );
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
    const [startTime, setStartTime] = React.useState("00:00");
    const [endTime, setEndTime] = React.useState("00:00");
    const [attendeeIds, setAttendeeIds] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    const handleStartDateChange = (event) => {
        event.preventDefault();
        const [date, time] = event.target.value.split("T");
        setStartTime(time);
        setSelectedStartDate(date);
    };

    const handleEndDateChange = (event) => {
        event.preventDefault();
        const [date, time] = event.target.value.split("T");
        setEndTime(time);
        setSelectedEndDate(date);
    };

    const handleChangeMultiple = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        console.warn(users);
        const { options } = event.target;
        console.warn("options: ", options);
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        console.log(value);
        setAttendeeIds(value);
    };

    const onSnackbarClose = (event) => {
        setShowSnackbar(false);
    };

    const [modules] = useState({
        toolbar: [
            [{ font: [] }],
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            [{ color: [] }, { background: [] }],
            ["clean"],
        ],
    });
    const [formats] = useState([
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "list",
        "bullet",
        "align",
        "color",
        "background",
    ]);

    const [description, setDescription] = useState("");

    const rteChange = (description, delta, source, editor) => {
        setDescription(editor.getHTML());
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const allUsers = await userService.getAll();
            setUsers(allUsers);
        };
        fetchUsers();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const filtered = users
            .filter((user) => {
                return attendeeIds.includes(String(user.id));
            })
            .map((user) => ({ id: user.id, email: user.email }));

        const eventParam = {
            title: formValues.title,
            description: description,
            image: formValues.image,
            location: formValues.location,
            start: {
                date: selectedStartDate,
                time: startTime,
            },
            end: {
                date: selectedEndDate,
                time: endTime,
            },
            attendees: filtered,
        };

        console.log(eventParam);
        try {
            await eventsService.createEvent(eventParam);
            history.push(`/events`);
        } catch (error) {
            setShowSnackbar(true);
            setAlertMessage(error);
        }
    };

    const handlePicChange = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            console.log("image changed"); //
            setFormValues({ ...formValues, image: reader.result });
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className={classes.root}>
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
            <Paper className={classes.paper}>
                <Typography variant="h3" component="h3" gutterBottom>
                    Beitrag erstellen
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        className={classes.textField}
                        id="title-input"
                        name="title"
                        label="Titel"
                        type="text"
                        variant="outlined"
                        value={formValues.title}
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <TextField
                        id="datetime-local"
                        label="Start"
                        type="datetime-local"
                        defaultValue={new Date()}
                        className={classes.textField}
                        margin="normal"
                        onChange={handleStartDateChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="datetime-local"
                        label="Start"
                        type="datetime-local"
                        defaultValue={new Date()}
                        className={classes.textField}
                        margin="normal"
                        onChange={handleEndDateChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className={classes.textField}
                        id="title-input"
                        name="location"
                        label="Ort"
                        type="text"
                        variant="outlined"
                        margin="normal"
                        value={formValues.location}
                        onChange={handleInputChange}
                    />
                    {formValues.image !== "" ? (
                        <img
                            className={classes.image}
                            src={formValues.image}
                            alt="Vorschau"
                        />
                    ) : (
                        ""
                    )}
                    <input
                        id="contained-button"
                        accept="image/*"
                        className={classes.input}
                        type="file"
                        onChange={handlePicChange}
                    />
                    <label className={classes.label} htmlFor="contained-button">
                        <Button
                            variant="contained"
                            color="default"
                            component="span"
                            className={classes.btn}>
                            Füge ein Bild hinzu <EditIcon></EditIcon>
                        </Button>
                    </label>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink htmlFor="select-multiple">
                            Teilnehmerinnen einladen
                        </InputLabel>
                        <Select
                            multiple
                            native
                            value={attendeeIds}
                            onChange={handleChangeMultiple}
                            inputProps={{
                                id: "select-multiple-native",
                            }}>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name} {user.surname}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <ReactQuill
                        className={classes.editor}
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        onChange={rteChange}
                        value={description || ""}
                    />
                    <Button
                        className={classes.submitBtn}
                        variant="contained"
                        color="secondary"
                        type="submit"
                        onClick={handleSubmit}>
                        Veranstaltung erstellen
                    </Button>
                </form>
            </Paper>
        </div>
    );
}
