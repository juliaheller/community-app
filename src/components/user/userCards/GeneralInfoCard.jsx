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
        width: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#5B6489",
    },
    cardHeader: {
        backgroundColor: "#569680",
        color: "white",
    },
    title: {
        color: "#1C304A",
        fontWeight: "bold",
    },
});

export default function GeneralInfoCard({ user }) {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
                title=" Allgemeine Informationen"></CardHeader>
            <CardContent>
                <Typography className={classes.title} align="left">
                    Im Forum seit:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {moment(user.joined).format("MMMM DD, YYYY")}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Geburstdatum:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.birthDate}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Geburstort:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.birthPlace}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Adresse:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.address}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Beruf:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.job}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Ausbildung/ Studium:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.education}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Kind(er):
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.children}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Haustier(e):
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.pets}
                </Typography>
                <Divider />
                <Typography className={classes.title} align="left">
                    Hobbies:
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="left"
                    gutterBottom>
                    {user.hobbies}
                </Typography>
            </CardContent>
        </Card>
    );
}
