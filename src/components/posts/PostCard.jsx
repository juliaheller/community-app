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

export default function PostCard({post}) {
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
            />
            <Typography style={{ color: " #1C304A" }} variant="h3">
            {post.title}
                </Typography>
            
            <CardMedia
                className={classes.media}
                image={post.image}
                title="Post Bild"
            />
            <CardContent>
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
                <Typography paragraph>
                    {post.content}
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
