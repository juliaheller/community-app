// Libraries
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Material UI
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

// Components
import EventCard from "../../components/events/EventCard";

// Services
import eventsService from "../../services/events.service";

const useStyles = makeStyles(() => ({
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
        color: "#5B6489",
    },
}));

//Add navigation tabs

export default function Event(params) {
    const classes = useStyles();
    let { id } = useParams();
    const [event, setEvent] = useState([]);

    useEffect(() => {
        async function fetchEvent() {
            const oneEvent = await eventsService.getOneEvent(id);
            setEvent(oneEvent);
        }
        fetchEvent();
    }, [id]);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EventCard event={event} id={id} />
            </Paper>
        </div>
    );
}
