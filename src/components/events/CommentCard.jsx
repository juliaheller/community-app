// Libraries
import React, { useState } from "react";
import moment from "moment";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

// Redux
import store from "../../redux/store";
import { deleteOneComment } from "../../redux/comments/comment.actions";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
    root: {
        minWidth: "300px",
        maxWidth: "100%",
        marginTop: "50px",
        color: "#5B6489",
    },
    content: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },

    info: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignSelf: "flex-start",
    },
    infoBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "30%",
    },
    comments: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignSelf: "flex-end",
    },
    button: {
        color: "#1C304A",
        display: "flex",
        justifyContent: "space-between",
    },
});

export default function CommentCard({ event, comment }) {
    const classes = useStyles();
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const { me } = useSelector((state) => state.auth);

    const onSnackbarClose = (event) => {
        setShowSnackbar(false);
    };

    const deleteComment = async () => {
        try {
            await store.dispatch(deleteOneComment(comment.id, event.id));
        } catch (error) {
            setShowSnackbar(true);
            setAlertMessage(error);
        }
    };
    return (
        <Card className={classes.root} variant="outlined">
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
            <CardContent className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.infoBox}>
                        <ChatBubbleOutlineIcon />
                        <Typography align="left" variant="body2" component="p">
                            Kommentar von
                        </Typography>
                        {comment.createdBy?.avatar ? (
                            <Avatar
                                className={classes.avatar}
                                src={comment.createdBy.avatar}></Avatar>
                        ) : (
                            <PersonOutlineIcon />
                        )}
                        <Typography align="left" variant="body2" component="p">
                            {comment.createdBy?.name}
                        </Typography>
                    </div>
                    <div className={classes.infoBox}>
                        {" "}
                        <CalendarTodayIcon />
                        <Typography align="left" variant="body2" component="p">
                            {moment(comment.createdAt).format(
                                `DD.MM.YY, HH:MM`
                            )}{" "}
                            Uhr
                        </Typography>
                        {me.id === comment.createdBy?.id ? (
                            <Button
                                className={classes.button}
                                onClick={deleteComment}>
                                <DeleteForeverIcon />
                            </Button>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className={classes.comments}>
                    <Typography align="left" variant="body2" component="p">
                        {comment.comment}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}
