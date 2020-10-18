// Libraries
import React from "react";

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

export default function FavouritesCard({ user }) {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
                title="Ich mag ..."></CardHeader>
            <CardContent>
                <Typography className={classes.title} align="left">
                    Essen & Trinken:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.favourites.food}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Buecher:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.favourites.books}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Musik:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.favourites.music}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Filme:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.favourites.movies}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Serien:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.favourites.series}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Tiere:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.favourites.animals}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Orte:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.favourites.places}
                </Typography>
            </CardContent>
        </Card>
    );
}
