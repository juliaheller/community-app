import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import witches from "../images/witches2.png";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginTop: "100px",
    },
});
export default function StartPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h2" component="h2" gutterBottom>
                Willkommen im Tempel der Sophia!{" "}
            </Typography>
            <img
                src={witches}
                alt=""
                style={{ width: "200px", height: "200px" }}
            />
            <Divider />
            <Typography variant="h3" component="h2" gutterBottom>
                Letzte Aktivitaeten
            </Typography>
        </div>
    );
}
