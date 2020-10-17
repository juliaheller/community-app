import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginTop: "100px",
    },
});
export default function Forum() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h3" component="h3">
                Forum
            </Typography>
        </div>
    );
}
