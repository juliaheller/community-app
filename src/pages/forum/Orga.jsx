import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginTop: "100px",
    },
    paper: {
        display: "flex",
        marginTop: 50,
        flexWrap: "wrap",
        justifyContent: "center",
    },
});

export default function Orga() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper>
                <Typography variant="h3" component="h3">
                    Orga & Planung
                </Typography>
            </Paper>
        </div>
    );
}
