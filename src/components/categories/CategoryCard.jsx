import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: "30%",
        margin: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    media: {
        height: 140,
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    link: {
        textDecoration: "none",
    },
});

export default function CategoryCard({ category, index }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} key={index}>
           
            <CardActionArea>
            <Link className={classes.link} to={`/categories/${category.id}`}>
                <CardMedia
                    className={classes.media}
                    image={category.image}
                    title={category.name}
                />
                </Link>
                <CardContent className={classes.content}>
                <Link className={classes.link}  to={`/categories/${category.id}`}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {category.name}
                    </Typography>
                    </Link>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        Aktuellestes Thema: Titel XY von user Z, Datum
                        Vorschautext letzter Post
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        100 Themen & 500 Kommentare
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link className={classes.link} to={`/categories/${category.id}`}>
                    {" "}
                    <Button size="small" color="primary">
                        Eintreten
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
