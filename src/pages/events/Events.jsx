import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginTop: "100px",
    },
    button: {
        marginTop: 50,
    },
});
export default function Events() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h3" component="h3">
                Veranstaltungen
            </Typography>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%238E24AA&amp;ctz=Europe%2FBerlin&amp;src=dGVtcGVsZGVyc29waGlhQGdtYWlsLmNvbQ&amp;src=ZGUuZ2VybWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%230B8043"
                title="Tempel der Sophia Events"
                style={{ border: "0", color: "#569680" }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"></iframe>
            <Link className={classes.link} to={`/newevent`}>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary">
                    + Neue Veranstaltung
                </Button>
            </Link>
        </div>
    );
}
