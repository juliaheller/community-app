// Libraries
import React from "react";
import moment from "moment";

// Material-UI
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        maxWidth: "400px",
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

export default function MagicCard({ user }) {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
                title="Magie"></CardHeader>
            <CardContent>
                <Typography className={classes.title} align="left">
                    Magische Erfahrungen:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.magic.experience}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Magische Interessen:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.magic.interest}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Krafttier(e):
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.magic.powerAnimal}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Goettinen und Goetter:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.magic.gods}
                </Typography>
            </CardContent>
        </Card>
    );
}
