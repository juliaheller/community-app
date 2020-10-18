// Libraries
import React from "react";

// Material-UI
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import PanToolIcon from "@material-ui/icons/PanTool";

const useStyles = makeStyles({
    card: {
        width: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    cardHeader: {
        backgroundColor: "black",
        color: "white",
    },
    title: {
        color: "black",
        fontWeight: "bold",
    },
});

export default function DontsCard({ user }) {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
                title="Achtung!"></CardHeader>
            <CardContent>
                <Typography className={classes.title} align="left">
                    <SentimentVeryDissatisfiedIcon /> Mag ich gar nicht:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.dislike}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    <PanToolIcon /> Allergien und Abneigungen:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.allergies}
                </Typography>
            </CardContent>
        </Card>
    );
}
