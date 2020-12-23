import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import witches from "../images/witches.svg";
import store from "../redux/store";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        marginTop: "100px",
        alignItems: "center",
    },
});
export default function Home() {
    const classes = useStyles();
    const state = store.getState();
    console.log(state);
    return (
        <div className={classes.root}>
            <Typography
                style={{ color: " #1C304A" }}
                variant="h2"
                component="h2"
                gutterBottom>
                Willkommen im Tempel der Sophia!{" "}
            </Typography>
            <img
                src={witches}
                alt=""
                style={{ width: "200px", height: "200px" }}
            />
            <Divider />
            <Typography
                style={{ color: " #1C304A" }}
                variant="h3"
                component="h3"
                gutterBottom>
                Letzte Aktivitaeten 
            </Typography>
        </div>
    );
}
