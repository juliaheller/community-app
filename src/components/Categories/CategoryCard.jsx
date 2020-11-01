import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: "50%",
        margin: 16,
    },
    media: {
        height: 140,
    },
});

export default function CategoryCard({ category, index }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} key={index}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={category.image}
                    title={category.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {category.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        Vorschautext letzter Post
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Eintreten
                </Button>
            </CardActions>
        </Card>
    );
}
