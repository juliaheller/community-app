import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CommentCard from "./CommentCard";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "80%",
        color: "#5B6489",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },

    avatar: {
        backgroundColor: red[500],
    },
    infoBox: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "50%",
        marginRight: 0,
        float: "right",
    },
    actions: {
        float: "right",
    },
}));

export default function PostCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.infoBox}>
                {" "}
                <CalendarTodayIcon />
                <Typography align="left" variant="body2" component="p">
                    12 March 2018, 1:46PM
                </Typography>
            </div>
            <CardHeader
                avatar={<Avatar className={classes.avatar}></Avatar>}
                title="Post title"
            />
            <CardMedia
                className={classes.media}
                image="https://dlife.com/wp-content/uploads/2018/12/Quinoa_Seafood_Paella.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="comment">
                    <ChatBubbleOutlineIcon />
                </IconButton>
            </CardActions>

            <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <IconButton aria-label="comment">
                    Comment <ChatBubbleOutlineIcon />
                </IconButton>
            </CardActions>
            <Divider />
            <CommentCard />
            <CommentCard />
            <CommentCard />
        </Card>
    );
}
