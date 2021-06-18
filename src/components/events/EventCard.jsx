// Libraries
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import parse from "html-react-parser";
import moment from "moment";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CommentCard from "./CommentCard";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

// Redux
import { useSelector } from "react-redux";
import store from "../../redux/store";
import {
    updateAnEvent,
    deleteOneEvent,
} from "../../redux/events/event.actions";
import {
    addComment,
    getAllComments,
} from "../../redux/event-comments/comment.actions";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "80%",
        color: "#5B6489",
        display: "flex",
        flexDirection: "column",
    },
    cardContent: {
        display: "block",
        alignSelf: "flex-start",
        textAlign: "left",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: "100%",
    },

    avatar: {
        backgroundColor: red[500],
    },
    form: {
        display: "flex",
        flexDirection: "column",
        padding: "6px",
        justifyContent: "flex-start",
        alignContent: "flex-end",
        alignItems: "flex-end",
        color: "#5B6489",
        width: "100%",
    },
    infoBox: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        marginRight: 0,
        float: "right",
    },
    actions: {
        float: "right",
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
    },
    title: {
        width: "100%",
    },
    textField: {
        fontSize: "20px",
        width: "100%",
        textAlign: "left",
        justifySelf: "flex-start",
    },
    editor: {
        width: "100%",
    },
    btn: {
        color: "#1C304A",
        display: "flex",
        justifyContent: "space-between",
    },
    btnMain: {
        color: "white",
    },
    submitBtn: {
        width: "20%",
        marginTop: "50px",
    },
    btnBox: {
        width: "100%",
        display: "flex",
    },
    btnBox2: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },
}));

export default function EventCard({ event }) {
    const classes = useStyles();
    const [eventData, setEventData] = useState(event);
    const [newComment, setNewComment] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [createdBy, setCreatedBy] = useState({});
    const { me } = useSelector((state) => state.auth);
    const { comments } = useSelector((state) => state.comments);
    const history = useHistory();
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

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

    const rteChange = (content, delta, source, editor) => {
        setEventData(
            Object.assign({}, eventData, { content: editor.getHTML() })
        );
    };

    const handlePicChange = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            setEventData({ ...event, image: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const handleChangeText = (event, type) => {
        switch (type) {
            case "title":
                setEventData(
                    Object.assign({}, eventData, { title: event.target.value })
                );
                break;
            case "comment":
                setNewComment(event.target.value);
                break;
            default:
                break;
        }
    };

    const edit = () => setShowInput(true);

    const deleteEvent = async () => {
        try {
            await store.dispatch(deleteOneEvent(event.id));
            history.push(`/events/`);
        } catch (error) {
            setShowSnackbar(true);
            setAlertMessage(error);
        }
    };

    const submitEvent = async (event) => {
        event.preventDefault();
        try {
            await store.dispatch(updateAnEvent(eventData, event.id));
            setShowInput(false);
        } catch (error) {
            setShowSnackbar(true);
            setAlertMessage(error);
        }
    };

    const submitComment = async (event) => {
        event.preventDefault();
        try {
            await store.dispatch(addComment(newComment, event.id));
            setNewComment("");
        } catch (error) {
            setShowSnackbar(true);
            setAlertMessage(error);
        }
    };

    useEffect(() => {
        setEventData(event);
        setCreatedBy(eventData.createdBy);
        const fetchComments = async () => {
            try {
                if (event.id) {
                    await store.dispatch(getAllComments(event.id));
                }
            } catch (error) {
                setShowSnackbar(true);
                setAlertMessage(error);
            }
        };
        fetchComments();
    }, [event, event.id, eventData.createdBy]);

    return (
        <Card className={classes.root}>
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

            <div className={classes.infoBox}>
                {" "}
                <CalendarTodayIcon />
                <Typography align="left" variant="body2" component="p">
                    {moment(event.createdAt).format(`DD.MM.YY, HH:MM`)} Uhr
                </Typography>
            </div>
            {createdBy ? (
                <CardHeader
                    avatar={
                        <Avatar
                            className={classes.avatar}
                            src={createdBy.avatar}></Avatar>
                    }
                    title={
                        <Typography align="left" variant="body2" component="p">
                            {createdBy.name} {createdBy.surname}
                        </Typography>
                    }
                />
            ) : (
                <CardHeader
                    avatar={<Avatar className={classes.avatar}></Avatar>}
                />
            )}

            <form className={classes.form} onSubmit={submitEvent}>
                {showInput ? (
                    <TextField
                        className={classes.textField}
                        id="title"
                        name="title"
                        label="Titel"
                        type="text"
                        variant="outlined"
                        value={eventData.title}
                        size="medium"
                        onChange={(event) => handleChangeText(event, "title")}
                    />
                ) : (
                    <Typography
                        className={classes.title}
                        style={{ color: " #1C304A" }}
                        variant="h3">
                        {eventData.title}
                    </Typography>
                )}
                {eventData.image !== "" ? (
                    <CardMedia
                        className={classes.media}
                        image={eventData.image}
                        title="Post Bild">
                        <label
                            className={classes.label}
                            htmlFor="contained-button">
                            <Button
                                variant="contained"
                                color="default"
                                component="span"
                                className={classes.btn}>
                                <EditIcon></EditIcon>
                            </Button>
                        </label>
                    </CardMedia>
                ) : (
                    <label className={classes.label} htmlFor="contained-button">
                        {me.id === createdBy?.id ? (
                            <Button
                                variant="contained"
                                color="default"
                                component="span"
                                className={classes.btn}>
                                Bild hinzufügen <EditIcon></EditIcon>
                            </Button>
                        ) : (
                            ""
                        )}
                    </label>
                )}
                <input
                    id="contained-button"
                    accept="image/*"
                    className={classes.input}
                    type="file"
                    onChange={handlePicChange}
                />
                {showInput ? (
                    <ReactQuill
                        className={classes.editor}
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        onChange={rteChange}
                        value={eventData.content || ""}
                    />
                ) : (
                    <CardContent className={classes.cardContent}>
                        {parse(String(eventData.content))}
                    </CardContent>
                )}
                {!showInput && me.id === createdBy?.id ? (
                    <div className={classes.btnBox2}>
                        <Button
                            variant="contained"
                            component="span"
                            color="secondary"
                            className={classes.btnMain}
                            onClick={deleteEvent}>
                            {" "}
                            BEITRAG löschen
                            <DeleteForeverIcon></DeleteForeverIcon>
                        </Button>
                        <Button
                            variant="contained"
                            component="span"
                            color="primary"
                            className={classes.btnMain}
                            onClick={edit}>
                            {" "}
                            BEITRAG bearbeiten
                            <EditIcon></EditIcon>
                        </Button>
                    </div>
                ) : (
                    ""
                )}
                {showInput ? (
                    <div className={classes.btnBox}>
                        {" "}
                        <Button
                            className={classes.btn}
                            style={{ width: "20%" }}
                            variant="contained"
                            type="submit">
                            Abbrechen
                        </Button>
                        <Button
                            style={{ width: "80%" }}
                            variant="contained"
                            color="secondary"
                            type="submit">
                            Beitrag aktualisieren
                        </Button>
                    </div>
                ) : (
                    ""
                )}
            </form>

            <CardActions className={classes.actions}>
                <ChatBubbleOutlineIcon />
            </CardActions>
            <Divider />

            <TextField
                id="outlined-basic"
                label="Kommentieren"
                variant="outlined"
                value={newComment}
                onChange={(event) =>
                    handleChangeText(event, "comment")
                }></TextField>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={submitComment}>
                Kommentar abschicken
            </Button>

            {comments
                ? comments.map((comment) => {
                      return (
                          <CommentCard
                              event={event}
                              comment={comment}
                              key={comment.id}
                          />
                      );
                  })
                : ""}
        </Card>
    );
}
